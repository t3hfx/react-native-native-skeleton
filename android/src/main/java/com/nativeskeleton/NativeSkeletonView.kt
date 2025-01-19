package com.nativeskeleton

import android.content.Context
import android.graphics.Color
import android.util.AttributeSet
import android.view.View
import androidx.appcompat.widget.LinearLayoutCompat
import com.facebook.shimmer.ShimmerFrameLayout

class NativeSkeletonView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : LinearLayoutCompat(context, attrs, defStyleAttr) {

    private val shimmerFrameLayout: ShimmerFrameLayout

    init {
        // Inflate the custom layout containing ShimmerFrameLayout
        View.inflate(context, R.layout.shimmer, this)

        // Find the ShimmerFrameLayout inside the inflated layout
        shimmerFrameLayout = findViewById(R.id.shimmer_view_container)
    }

    fun setColor(color: String) {
        shimmerFrameLayout.setBackgroundColor(Color.parseColor(color))
    }

    fun setVisible(visible: Boolean) {
        if (visible) {
            shimmerFrameLayout.startShimmer()
        } else {
            shimmerFrameLayout.stopShimmer()
        }
    }
}