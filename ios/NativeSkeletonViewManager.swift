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
  private var isSkeletonVisible = false

  // Expose visible property to be set from JavaScript
  @objc var visible: Bool = false {
    didSet {
      self.setSkeletonVisibility(isVisible: visible)
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
    self.setSkeletonVisibility(isVisible: isSkeletonVisible)
  }

  private func setSkeletonVisibility(isVisible: Bool) {
    if isVisible {
      self.showAnimatedGradientSkeleton()
    } else {
      self.hideSkeleton()
    }
  }
}
