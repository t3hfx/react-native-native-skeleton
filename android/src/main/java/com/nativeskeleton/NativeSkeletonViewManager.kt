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

    @ReactProp(name = "color")
    fun setColor(view: NativeSkeletonView, color: String?) {
        color?.let {
            view.setColor(it)
        }
    }

    @ReactProp(name = "visible")
    fun setVisible(view: NativeSkeletonView, visible: Boolean) {
        view.setVisible(visible)
    }
}