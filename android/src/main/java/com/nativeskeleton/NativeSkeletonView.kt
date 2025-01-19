package com.nativeskeleton

import android.content.Context
import android.graphics.Color
import android.util.AttributeSet
import android.view.View
import androidx.appcompat.widget.LinearLayoutCompat
import com.facebook.shimmer.ShimmerFrameLayout
import android.animation.ObjectAnimator

class NativeSkeletonView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : LinearLayoutCompat(context, attrs, defStyleAttr) {

    private val shimmerFrameLayout: ShimmerFrameLayout
    private val shimmerLowerView: View

    init {
        // Inflate the custom layout containing ShimmerFrameLayout
        View.inflate(context, R.layout.shimmer, this)

        // Find the ShimmerFrameLayout inside the inflated layout
        shimmerFrameLayout = findViewById(R.id.shimmer_view_container)
        shimmerLowerView = findViewById(R.id.shimmer_lower_view)
    }

    fun setColor(color: String) {
        shimmerFrameLayout.setBackgroundColor(Color.parseColor(color))
    }

    fun setVisible(visible: Boolean) {
        if (visible) {
            stopFadeOutAnimation()
            shimmerFrameLayout.startShimmer()
        } else {
            shimmerFrameLayout.stopShimmer()
            startFadeOutAnimation()
        }
    }

    fun startFadeOutAnimation() {
        val animator = ObjectAnimator.ofFloat(shimmerLowerView, "alpha", 1f, 0f)
        animator.duration = 300
        animator.start()
    }

    fun stopFadeOutAnimation() {
        shimmerLowerView.alpha = 1f // Reset alpha to fully opaque
    }
}