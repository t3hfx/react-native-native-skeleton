package com.nativeskeleton

import android.graphics.Color
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class NativeSkeletonViewManager : SimpleViewManager<NativeSkeletonView>() {

    override fun getName() = "NativeSkeletonView"

    override fun createViewInstance(reactContext: ThemedReactContext): NativeSkeletonView {
        // Create an instance of your custom view
        return NativeSkeletonView(reactContext)
    }

    @ReactProp(name = "visible")
    fun setVisible(view: NativeSkeletonView, visible: Boolean) {
        view.setVisible(visible)
    }

    @ReactProp(name = "baseBackgroundColor")
    fun setBaseColor(view: NativeSkeletonView, baseBackgroundColor: String) {
        view.setBaseColor(baseBackgroundColor)
    }

    @ReactProp(name = "secondaryBackgroundColor")
    fun setSecondaryColor(view: NativeSkeletonView, secondaryBackgroundColor: String) {
        view.setSecondaryColor(secondaryBackgroundColor)
    }

    @ReactProp(name = "duration")
    fun setDuration(view: NativeSkeletonView, duration: Int) {
        view.setDuration(duration.toLong())
    }
}