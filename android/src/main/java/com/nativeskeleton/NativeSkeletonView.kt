package com.nativeskeleton

import android.content.Context
import android.graphics.Color
import android.util.AttributeSet
import android.view.View
import androidx.appcompat.widget.LinearLayoutCompat
import com.facebook.shimmer.ShimmerFrameLayout
import com.facebook.shimmer.Shimmer
import android.animation.ObjectAnimator

class NativeSkeletonView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : LinearLayoutCompat(context, attrs, defStyleAttr) {


    private val shimmerFrameLayout: ShimmerFrameLayout
    private val shimmerLowerView: View
    private val builder = Shimmer.ColorHighlightBuilder()

    init {
        // Inflate the custom layout containing ShimmerFrameLayout
        View.inflate(context, R.layout.shimmer, this)

        // Find the ShimmerFrameLayout inside the inflated layout
        shimmerFrameLayout = findViewById(R.id.shimmer_view_container)
        shimmerLowerView = findViewById(R.id.shimmer_lower_view)
    }

    fun setVisible(visible: Boolean) {
        if (visible) {
            resetFadeOutAnimation()
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

    fun resetFadeOutAnimation() {
        shimmerLowerView.alpha = 1f // Reset alpha to fully opaque
    }

    fun setBaseColor(baseBackgroundColor: String) {
        builder.setBaseAlpha(1.0f)
        builder.setBaseColor(Color.parseColor(baseBackgroundColor))
        shimmerFrameLayout.setShimmer(builder.build())
    }

    fun setSecondaryColor(secondaryBackgroundColor: String) {
        builder.setHighlightColor(Color.parseColor(secondaryBackgroundColor))
        shimmerFrameLayout.setShimmer(builder.build())
    }
}