<template>
    <div class="mx-auto w-48 h-48 flex items-center justify-center">
        <span class="tada">🎉</span>
    </div>
</template>
<style>
.tada {
    font-size: 2rem;
    display: block;
    animation: wiggle 2s cubic-bezier(1, 0, 0, 1) 1 0s normal forwards;
}

@keyframes wiggle {
    0% {
        font-size: 0rem;
        opacity: 1;
        transform: rotate(10deg);
    }

    30% {
        font-size: 3rem;
        transform: rotate(-10deg);
    }

    50% {
        font-size: 2rem;
        opacity: 1;
        transform: rotate(10deg);
    }

    100% {
        font-size: 9rem;
        opacity: 0;
        transform: rotate(0deg);
    }
}
</style>