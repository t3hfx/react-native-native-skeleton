#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(NativeSkeletonViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(visible, BOOL)

RCT_EXPORT_VIEW_PROPERTY(baseBackgroundColor, NSString)

RCT_EXPORT_VIEW_PROPERTY(secondaryBackgroundColor, NSString)

@end
