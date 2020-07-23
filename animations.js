let homeLoad = gsap.timeline()
homeLoad.from("h2, p", {duration: 2, opacity: 0, y: -200, ease: "elastic"})
homeLoad.from("img", {duration: 1, opacity: 0, y: "random(-200, 200)", x: "random(-200, 200)"})


let resultsLoad = gsap.timeline()

resultsLoad.from("canvas", {duration: 1.5, x: -800, ease: "back"})

resultsLoad.from("button", {duration: 1.25, y: 400, ease: "slow"})