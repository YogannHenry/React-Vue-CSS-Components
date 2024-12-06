<template>
    <div
      class="card"
      :style="{
        width: width,
        height: height,
        '--card-before-width': adjustedBeforeWidth,
        '--card-before-height': adjustedBeforeHeight,
      }"
    >
      <p class="heading">{{ heading }}</p>
      <p>{{ subtitle }}</p>
      <p>{{ footer }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "GradientCard",
    props: {
      heading: {
        type: String,
        default: "Popular this month",
      },
      subtitle: {
        type: String,
        default: "Powered By",
      },
      footer: {
        type: String,
        default: "Uiverse",
      },
      width: {
        type: String,
        default: "190px",
      },
      height: {
        type: String,
        default: "254px",
      },
    },
    computed: {
      // Calculer la taille du pseudo-élément en fonction des dimensions données
      adjustedBeforeWidth() {
        // Ajoutez 10 pixels (ou ajustez selon vos besoins) à la largeur donnée
        const numericalWidth = parseFloat(this.width);
        return `${numericalWidth + 10}px`;
      },
      adjustedBeforeHeight() {
        // Ajoutez 10 pixels (ou ajustez selon vos besoins) à la hauteur donnée
        const numericalHeight = parseFloat(this.height);
        return `${numericalHeight + 10}px`;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    position: relative;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  /* Utilisation de variables CSS pour les dimensions du ::before */
  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: var(--card-before-width, 200px); /* Utilisation de la variable CSS */
    height: var(--card-before-height, 264px); /* Utilisation de la variable CSS */
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #0284c7 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #0284c7 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }
  
  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }
  
  .card p:not(.heading) {
    font-size: 14px;
  }
  
  .card p:last-child {
    color: #e81cff;
    font-weight: 600;
  }
  
  .card:hover::after {
    filter: blur(30px);
  }
  
  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
  </style>
  