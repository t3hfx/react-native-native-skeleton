#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(NativeSkeletonViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(visible, BOOL)

RCT_EXPORT_VIEW_PROPERTY(initBackgroundColor, NSString)

RCT_EXPORT_VIEW_PROPERTY(secondaryBackgroundColor, NSString)

@end
