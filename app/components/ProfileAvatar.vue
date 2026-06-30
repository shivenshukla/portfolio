<script setup lang="ts">
const flipped = ref(false)

const toggleFlip = () => {
    flipped.value = !flipped.value
}
</script>

<template>
    <button
        type="button"
        class="profile-flip h-36 w-36 shrink-0 cursor-pointer rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:h-44 sm:w-44"
        :aria-label="flipped ? 'Show profile picture' : 'Show how this illustration was made'"
        :aria-pressed="flipped"
        @click="toggleFlip"
    >
        <div
            class="profile-flip-inner relative h-full w-full"
            :class="{ 'profile-flip-inner--flipped': flipped }"
        >
            <div class="profile-flip-face absolute inset-0 overflow-hidden rounded-full">
                <img
                    src="~/assets/images/profile.png"
                    alt=""
                    class="h-full w-full object-cover"
                >
            </div>
            <div class="profile-flip-face profile-flip-back absolute inset-0 flex items-center justify-center rounded-full bg-sky-200">
                <p class="scribble-text px-3 text-center text-sm leading-snug sm:px-4 sm:text-base">
                    <span class="scribble-line -rotate-2">Drawn in</span>
                    <span class="scribble-line rotate-1">Microsoft</span>
                    <span class="scribble-line -rotate-1">Paint : )</span>
                </p>
            </div>
        </div>
    </button>
</template>

<style scoped>
.profile-flip {
    perspective: 1000px;
}

.profile-flip-inner {
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
}

.profile-flip-inner--flipped {
    transform: rotateY(180deg);
}

.profile-flip-face {
    backface-visibility: hidden;
}

.profile-flip-back {
    transform: rotateY(180deg);
}

.scribble-text {
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
}

.scribble-line {
    display: block;
    color: #1e3a8a;
    letter-spacing: 0.04em;
    -webkit-text-stroke: 0.4px #172554;
    paint-order: stroke fill;
    text-shadow:
        0.6px 0.6px 0 rgba(23, 37, 84, 0.45),
        1.2px 1.2px 0 rgba(30, 58, 138, 0.25),
        -0.4px 0.3px 0 rgba(30, 64, 175, 0.35);
}

@media (prefers-reduced-motion: reduce) {
    .profile-flip-inner {
        transition: none;
    }
}
</style>
