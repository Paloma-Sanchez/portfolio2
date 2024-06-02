<template>

    <section
        class=""
    >
        <Icon
            name="material-symbols-light:arrow-cool-down"
            class=" relative left-[104px] -top-[80px] animate-[bounce_1s_linear_infinite_1800ms] "
        />
        <div 
            class="curved-text animate-[spin_6s_linear_infinite_1800ms]" 
            ref="curvedText"
            >
            SCROLL DOWN &#9733; SCROLL DOWN &#9733; 
        </div>
    </section>


</template>
<script setup lang="ts">
const curvedText = ref(null);
//animate-[spin_6s_linear_infinite]
onMounted(() => {
    //code goes here 
    console.log(curvedText.value.offsetWidth)
    updateCurvedText(curvedText, 56);

})


const updateCurvedText = (curvedText, radius:number) => {
    const element = curvedText.value;

    if (!element) return;

    element.style.minWidth = 'initial';
    element.style.minHeight = 'initial';

    const w = element.offsetWidth;
    const h = element.offsetHeight;

    element.style.minWidth = `${w}px`;
    element.style.minHeight = `${w}px`;

    const text = element.textContent || '';

    let html = '';

    Array.from(text).forEach(letter => {
        html += `<span>${letter}</span>`;
    });

    element.innerHTML = html;

    const letters = element.querySelectorAll('span');


    letters.forEach((letter) => {
        letter.style.position = 'absolute';
        letter.style.height = `${radius}px`;
        letter.style.transformOrigin = 'bottom center';
    });

    const circleLength = 2 * Math.PI * radius;
    const angleRad = w / (2 * radius);
    const angle = 2 * angleRad * 360 / Math.PI / text.length;
    let i = 0

    letters.forEach((letter) => {
        const rotateAngle = i * angle - (text.length * angle) / 2;
        letter.style.transform = `translate(${w*0.93 / 2}px, ${h *2}px) rotate(${rotateAngle}deg)`;
        i++;
    });
    
}



</script>
<style scoped>
.curved-text {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    font-size: 10px;
}

span {
    width: 10px;
    text-align: center;
    padding: 30px;
    margin: 0px;
}
</style>