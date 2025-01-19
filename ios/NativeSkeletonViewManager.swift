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

  // Expose visible property to be set from JavaScript
  @objc var visible: Bool = true {
    didSet {
      isSkeletonVisible = visible
      checkAndUpdateSkeleton()
      if !visible {
        self.setSkeletonVisibility(isVisible: false, baseColor: baseColor, secondaryColor: nil)
      }
    }
  }

  private func checkAndUpdateSkeleton() {
  // Ensure that we have secondaryBackgroundColor and baseBackgroundColor from react native then update the skeleton
  if isSkeletonVisible && !secondaryBackgroundColor.isEmpty && !baseBackgroundColor.isEmpty {
      let customGradient = SkeletonGradient(baseColor: baseColor, secondaryColor: secondaryColor)
      let animation = SkeletonAnimationBuilder().makeSlidingAnimation(withDirection: GradientDirection.topLeftBottomRight)
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
