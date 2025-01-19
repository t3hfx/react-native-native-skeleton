import SkeletonView
import UIKit

@objc(NativeSkeletonViewManager)
class NativeSkeletonViewManager: RCTViewManager {

  override func view() -> (NativeSkeletonView) {
    return NativeSkeletonView()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return false
  }
}

class NativeSkeletonView : UIView {
  private var isSkeletonVisible = true
  private var baseColor: UIColor = UIColor.clear // Default color
  private var secondaryColor: UIColor = UIColor.clear // Default color
  private var _duration: Double = 0.0 // Default duration
  private var _direction: GradientDirection = .topLeftBottomRight // Default direction


  // Expose baseBackgroundColor property to be set from JavaScript
  @objc var baseBackgroundColor: String = "" {
    didSet {
      let color = hexStringToUIColor(hexColor: baseBackgroundColor) 
      self.baseColor = color
      checkAndUpdateSkeleton()
    }
  }
  // Expose secondaryBackgroundColor property to be set from JavaScript
   @objc var secondaryBackgroundColor: String = "" {
    didSet {
      let color = hexStringToUIColor(hexColor: secondaryBackgroundColor) 
      self.secondaryColor = color
      checkAndUpdateSkeleton()
    }
  }

  // We want to pass a single value for both iOS and Android, so here we convert this value for SkeletonView
  @objc var duration: NSNumber = 0 {
    didSet {
      self._duration = Double(Int(truncating: duration) / 1000)
      checkAndUpdateSkeleton()
    }
  }

  // Expose visible property to be set from JavaScript
  @objc var visible: Bool = true {
    didSet {
      checkAndUpdateSkeleton()
      if !visible {
        self.setSkeletonVisibility(isVisible: false, baseColor: baseColor, secondaryColor: nil)
      }
    }
  }

  // Expose visible property to be set from JavaScript
  @objc var direction: String = "" {
    didSet {
      switch direction {
        case "leftRight":
            self._direction = .leftRight
        case "rightLeft":
            self._direction = .rightLeft
        case "topBottom":
            self._direction = .topBottom
        case "bottomTop":
            self._direction = .bottomTop
        case "topLeftBottomRight":
            self._direction = .topLeftBottomRight
        case "bottomRightTopLeft":
            self._direction = .bottomRightTopLeft
        default:
            self._direction = .topLeftBottomRight
      }
      checkAndUpdateSkeleton()
    }
  }

  private func checkAndUpdateSkeleton() {
  // Ensure that we have secondaryBackgroundColor and baseBackgroundColor from react native then update the skeleton
    if isSkeletonVisible && !secondaryBackgroundColor.isEmpty && !baseBackgroundColor.isEmpty && (_duration > 0.0) && direction != "" {
      let customGradient = SkeletonGradient(baseColor: baseColor, secondaryColor: secondaryColor)
      let animation = SkeletonAnimationBuilder().makeSlidingAnimation(withDirection: self._direction, duration: _duration)
      self.updateAnimatedGradientSkeleton(usingGradient: customGradient, animation: animation)
    } 
  }


  override init(frame: CGRect) {
    super.init(frame: frame)
    setupSkeleton()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupSkeleton()
  }

  private func setupSkeleton() {
    self.isSkeletonable = true
    // Here we launch skeleton on init of the component, so we don't see component underneath, 
    // it's fired before we get visible={true} from react native
    self.setSkeletonVisibility(isVisible: true, baseColor: baseColor, secondaryColor: secondaryColor)
  }

    private func setSkeletonVisibility(isVisible: Bool, baseColor: UIColor, secondaryColor: UIColor?) {
    if isVisible {
      self.showAnimatedGradientSkeleton()
    } else {
      self.hideSkeleton()
    }
  }

  func hexStringToUIColor(hexColor: String) -> UIColor {
    let stringScanner = Scanner(string: hexColor)
    if(hexColor.hasPrefix("#")) {
      stringScanner.scanLocation = 1
    }
    var color: UInt32 = 0
    stringScanner.scanHexInt32(&color)
    let r = CGFloat(Int(color >> 16) & 0x000000FF)
    let g = CGFloat(Int(color >> 8) & 0x000000FF)
    let b = CGFloat(Int(color) & 0x000000FF)
    return UIColor(red: r / 255.0, green: g / 255.0, blue: b / 255.0, alpha: 1)
  }
}
