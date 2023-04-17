<template>
    <span class="loader"></span>
</template>
<style>
.loader {
    display: block;
    position: relative;
    height: 32px;
    width: 120px;
    background: linear-gradient(#000 4px, transparent 0) no-repeat;
    background-position: 0 16px;
    box-sizing: border-box;
    overflow: hidden;
}

.loader:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #FFF;
    border: 6px solid #000;
    box-sizing: border-box;
    animation: ballbns 1.5s linear infinite;
}

@keyframes ballbns {
    0% {
        left: 0;
        transform: translateX(-100%);
    }

    100% {
        left: 100%;
        transform: translateX(0%);
    }
}
</style>