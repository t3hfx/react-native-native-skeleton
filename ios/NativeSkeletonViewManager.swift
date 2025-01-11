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
  //  private var baseColor: UIColor = UIColor(red: 0.9, green: 0.9, blue: 0.9, alpha: 1) // Default color
  //  private var secondaryColor: UIColor = UIColor(red: 0.5, green: 0.5, blue: 0.5, alpha: 1) // Default color

  private var baseColor: UIColor = UIColor.clear // Default color
  private var secondaryColor: UIColor = UIColor.clear // Default color


  // Expose initBackgroundColor property to be set from JavaScript
  @objc var initBackgroundColor: String = "" {
    didSet {
      let color = hexStringToUIColor(hexColor: initBackgroundColor) 
      self.backgroundColor = color
      self.baseColor = color
      checkAndSetSkeletonVisibility()
    }
  }
  // Expose secondaryBackgroundColor property to be set from JavaScript
   @objc var secondaryBackgroundColor: String = "" {
    didSet {
      let color = hexStringToUIColor(hexColor: secondaryBackgroundColor) 
      self.secondaryColor = color
      checkAndSetSkeletonVisibility()
    }
  }

  // Expose visible property to be set from JavaScript
  @objc var visible: Bool = true {
    didSet {
      // guard visible != isSkeletonVisible else { return }
      isSkeletonVisible = visible
      // self.setSkeletonVisibility(isVisible: visible)


      checkAndSetSkeletonVisibility()
      if !visible {
        self.backgroundColor = nil
        self.setSkeletonVisibility(isVisible: false, baseColor: baseColor, secondaryColor: nil)
      }
    }
  }

  private func checkAndSetSkeletonVisibility() {
  // Ensure all conditions are met before calling setSkeletonVisibility
  if isSkeletonVisible && !secondaryBackgroundColor.isEmpty && !initBackgroundColor.isEmpty {
    setSkeletonVisibility(isVisible: true, baseColor: baseColor, secondaryColor: secondaryColor)
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
    // self.setSkeletonVisibility(isVisible: isSkeletonVisible)
  }

    private func setSkeletonVisibility(isVisible: Bool, baseColor: UIColor, secondaryColor: UIColor?) {
    if isVisible {
      let customGradient = SkeletonGradient(baseColor: baseColor, secondaryColor: secondaryColor)
      let animation = SkeletonAnimationBuilder().makeSlidingAnimation(withDirection: GradientDirection.topLeftBottomRight)
      self.showAnimatedGradientSkeleton(usingGradient: customGradient, animation: animation, transition: .none)
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
