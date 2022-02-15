//Animation scrol element simple avec aos js
AOS.init();

//Compatibility navigator for toggle
function CompatibilityNavigator() {
  //Varaible qui pemet de diferencier de l'userAgent de chrome et de safari
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (navigator.userAgent.includes(isSafari) || navigator.userAgent.includes("Firefox")) {
    var contentToggle = document.querySelectorAll('.contentTextFunctionNone');
    var contentImgToggle = document.querySelectorAll('.imgContainerFunctionNone');
    for (var i = 0; i < contentToggle.length; i++) {
      contentToggle[i].classList.add('contentTextFunctionOther');
    }
    for (var i = 0; i < contentImgToggle.length; i++) {
      contentImgToggle[i].classList.add('contentImgFunctionOther');
    }
  }

}

CompatibilityNavigator();

// //Animation Scan Lottie
// LottieInteractivity.create({
//   player:'#lottie_scann',
//   mode:"scroll",
//       actions: [
//       {
//           visibility:[0, 1.0],
//           type: "seek",
//           frames: [0, 500],
//       },
//       ]
//   });


/// TOOGLE TAB

function ToggleTab() {

  var img = document.querySelector('.imgContainerFunctionNone');

  var AllButton = document.querySelectorAll('.BoutonFunction');

  var executeFunction = function () {
    var AllButton = document.querySelectorAll('.BoutonFunction');
    for (var i = 0; i < AllButton.length; i++) {
      AllButton[i].addEventListener('mouseenter', change);
    }
  }

  var clear = function () {
    var AllContent = document.querySelectorAll('.contentTextFunctionNone');
    var AllImg = document.querySelectorAll('.imgContainerFunctionNone');
    var AllButton = document.querySelectorAll('.BoutonFunction');


    for (var i = 0; i < AllContent.length; i++) {
      AllContent[i].classList.remove('contentTextFunction');
      AllImg[i].classList.remove('imgContainerFunction');
      AllButton[i].classList.remove('BoutonFunctionActive');
      // e.currentTarget.classList.remove('BoutonFunctionActive');
    }
    // for (var i = 0; i < AllImg.length; i++) {
      
    // }
  }


  var change = function (e) {
    clear();
    var id = e.currentTarget.getAttribute('data-tab');
    e.currentTarget.classList.add('BoutonFunctionActive');
    document.getElementById(id).classList.add('contentTextFunction');
    document.querySelector('.' + id).classList.add('imgContainerFunction');
  }


  executeFunction();
}

ToggleTab();



// Partie GSAP//

//Apparition Hero
var Herotl = gsap.timeline();
Herotl.from(".hero", {
  opacity: 0,
  duration: 2
})
Herotl.to(".hero", {
  opacity: 1,
  duration: 3
})

//Animation scrol complexe nos valeurs


gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.matchMedia({

  // all 
  "all": function () {
    //SCANN

    gsap.to(".imgBackgroundScan", {
      scale: "2",
      scrollTrigger: {
        trigger: ".imgBackgroundScan",
        start: "top 15%",
        end: "top 90%",
        id: "background",
        scrub: true,
        pinSpacing: false,

      }

    });

    //Apprition Valeur

    let Vtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ValeurAmuser",
        start: "top 15%",
        end: "center 90%",
        id: "valeurTitre",
        scrub: true,
        pinSpacing: false,
      }
    })

    Vtl.to(".ValeurTiitre", {
      opacity: 1,
      duration: 2
    })

    let Vltl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "top 30%",
        end: "bottom 80%",
        id: "valeurAmuser",
        scrub: true,
        pinSpacing: false,

      }
    })

    Vltl.to(".ValeurAmuser", {
      opacity: 1,
      duration: 2
    })

    let VPtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "top 20%",
        end: "bottom 80%",
        id: "valeurPerseverer",
        scrub: true,
        pinSpacing: false,

      }
    })

    VPtl.to(".ValeurPerseverer", {
      opacity: 1,
      duration: 2
    })

    let VPAtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "top 10%",
        end: "bottom 80%",
        id: "ValeurPartager",
        scrub: true,
        pinSpacing: false,

      }
    })

    VPAtl.to(".ValeurPartager", {
      opacity: 1,
      duration: 2
    })

    let VItl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "top 0%",
        end: "bottom 80%",
        id: "ValeurInnover",
        scrub: true,
        pinSpacing: false,

      }
    })

    VItl.to(".ValeurInnover", {
      opacity: 1,
      duration: 2
    })

    //Dispartion Valeur


    let VTSDtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "center 0",
        endTrigger: ".AppUiPlantz",
        end: "bottom 0",
        id: "ValeurTitreDisparition",
        scrub: true,
        pinSpacing: false,
      }
    })

    VTSDtl.to(".ValeurTiitre", {
      opacity: 0,
      duration: 2
    })



    let VASDtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "center 0",
        endTrigger: ".AppUiPlantz",
        end: "bottom 0",
        id: "valeurAmuserDisparition",
        scrub: true,
        pinSpacing: false,

      }
    })

    VASDtl.to(".ValeurAmuser", {
      opacity: 0,
      duration: 2
    })

    let VPSDtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "center 0",
        endTrigger: ".AppUiPlantz",
        end: "bottom 0",
        id: "valeurAmuserDisparition",
        scrub: true,
        pinSpacing: false,

      }
    })

    VPSDtl.to(".ValeurPerseverer", {
      opacity: 0,
      duration: 2
    })

    let VPASDtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "center 0",
        endTrigger: ".AppUiPlantz",
        end: "bottom 0",
        id: "ValeurPartagerDisparition",
        scrub: true,
        pinSpacing: false,

      }
    })

    VPASDtl.to(".ValeurPartager", {
      opacity: 0,
      duration: 2
    })

    let VISDtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "center 0",
        endTrigger: ".AppUiPlantz",
        end: "bottom 0",
        id: "ValeurInnoverDisparition",
        scrub: true,
        pinSpacing: false,
      }
    })


    VISDtl.to(".ValeurInnover", {
      opacity: 0,
      duration: 2
    })

  },

  // Desktop
  "(min-width: 1100px)": function () {


    //Valeur Fusion

    let VASMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurAmuserScroolMoov",
        scrub: true,
        pinSpacing: false,

      }
    })


    VASMtl.to(".ValeurAmuser", {
      x: 265,
      y: 50,
      duration: 5,
      delay: 1.5
    })


    let VPSMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurPersevererScroolMoov",
        scrub: true,
        pinSpacing: false,
      }
    })

    VPSMtl.to(".ValeurPerseverer", {
      x: -265,
      y: 50,
      duration: 8,
      delay: 3
    })

    let VPASMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurPatagerScroolMoov",
        scrub: true,
        pinSpacing: false,
      }
    })

    VPASMtl.to(".ValeurPartager", {
      x: 265,
      y: -50,
      duration: 5,
      delay: 1.5
    })

    let VISMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurInnoverScroolMoov",
        scrub: true,
        pinSpacing: false,

      }
    })

    VISMtl.to(".ValeurInnover", {
      x: -265,
      y: -50,
      duration: 8,
      delay: 3
    })


    let UIAPP = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "center 0",
        endTrigger: ".AppUiPlantz",
        end: "bottom 0",
        id: "AppUiPlantz",
        scrub: true,
      }

    });

    UIAPP.to(".AppUiPlantz", {
      opacity: 1,
      duration: 2
    })

  },
  // Tablette

  "(min-width: 756px) and (max-width: 1099px)": function () {

    //Valeur Fusion

    let VASMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurAmuserScroolMoov",
        scrub: true,
        pinSpacing: false,

      }
    })


    VASMtl.to(".ValeurAmuser", {
      x: 140,
      y: 30,
      duration: 5,
      delay: 1.5
    })


    let VPSMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurPersevererScroolMoov",
        scrub: true,
        pinSpacing: false,
      }
    })

    VPSMtl.to(".ValeurPerseverer", {
      x: -140,
      y: 30,
      duration: 8,
      delay: 3
    })

    let VPASMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurPatagerScroolMoov",
        scrub: true,
        pinSpacing: false,
      }
    })

    VPASMtl.to(".ValeurPartager", {
      x: 140,
      y: -30,
      duration: 5,
      delay: 1.5
    })

    let VISMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurInnoverScroolMoov",
        scrub: true,
        pinSpacing: false,

      }
    })

    VISMtl.to(".ValeurInnover", {
      x: -140,
      y: -30,
      duration: 8,
      delay: 3
    })


    let UIAPP = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "center 0",
        endTrigger: ".AppUiPlantz",
        end: "bottom 0",
        id: "AppUiPlantz",
        scrub: true,
      }

    });

    UIAPP.to(".AppUiPlantz", {
      opacity: 1,
      duration: 2
    })

  },
  // Mobile

  " (max-width: 754px)": function () {

    //Valeur Fusion

    let VASMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurAmuserScroolMoov",
        scrub: true,
        pinSpacing: false,

      }
    })


    VASMtl.to(".ValeurAmuser", {
      x: 10,
      y: 60,
      duration: 5,
      delay: 1.5
    })


    let VPSMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurPersevererScroolMoov",
        scrub: true,
        pinSpacing: false,
      }
    })

    VPSMtl.to(".ValeurPerseverer", {
      x: -10,
      y: 60,
      duration: 8,
      delay: 3
    })

    let VPASMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurPatagerScroolMoov",
        scrub: true,
        pinSpacing: false,
      }
    })

    VPASMtl.to(".ValeurPartager", {
      x: 10,
      y: -60,
      duration: 5,
      delay: 1.5
    })

    let VISMtl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeur",
        start: "top 0",
        endTrigger: ".valeurContainer",
        end: "bottom 50%",
        id: "ValeurInnoverScroolMoov",
        scrub: true,
        pinSpacing: false,

      }
    })

    VISMtl.to(".ValeurInnover", {
      x: -10,
      y: -60,
      duration: 8,
      delay: 3
    })


    let UIAPP = gsap.timeline({
      scrollTrigger: {
        trigger: ".valeurContainer",
        start: "center 0",
        endTrigger: ".AppUiPlantz",
        end: "bottom 0",
        id: "AppUiPlantz",
        scrub: true,
      }

    });

    UIAPP.to(".AppUiPlantz", {
      opacity: 1,
      duration: 2
    })

  }

})


//FOOTER

function footerAnim() {

  const scan = document.getElementById("scanLink");
  var barXP = document.getElementById("footerImg");

  document.querySelector("a[href='#accueil']").addEventListener('mouseenter', (e) => {
    barXP.style.animation = "xpbarAccueil 1s forwards";
  });
  document.querySelector("a[href='#scan']").addEventListener('mouseenter', (e) => {
    barXP.style.animation = "xpbarScan 1s forwards";
  });
  document.querySelector("a[href='#gamification']").addEventListener('mouseenter', (e) => {
    barXP.style.animation = "xpbarGamification 1s forwards";
  });
  document.querySelector("a[href='#otherFunction']").addEventListener('mouseenter', (e) => {
    barXP.style.animation = "xpbarOtherFunction 1s forwards";
  });
  document.querySelector("a[href='#temoignage']").addEventListener('mouseenter', (e) => {
    barXP.style.animation = "xpbarTemoignage 1s forwards";
  });
  document.querySelector("a[href='#valeur']").addEventListener('mouseenter', (e) => {
    barXP.style.animation = "xpbarValeur 1s forwards";
  });
  document.querySelector("a[href='#telechargement']").addEventListener('mouseenter', (e) => {
    barXP.style.animation = "xpbarTelechargement 1s forwards";
  });


  document.querySelector("body").addEventListener('mouseover', (e) => {
    barXP.style.animation = "xpbarReset 1s forwards";
  });

}

footerAnim();