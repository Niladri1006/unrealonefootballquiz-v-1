let start = document.getElementById("start");
let prem = document.getElementById("prem");
let laliga = document.getElementById("laliga");
let ucl = document.getElementById("ucl");
let wc = document.getElementById("wc");
let ms = document.getElementById("ms");
let pvid = document.getElementById("pvid");
let cont = document.getElementById("cont");
let modal = document.getElementById("modal");
let mstart = document.getElementById("mstart");
let premierleague = document.getElementById("premierleague");
let laligas = document.getElementById("laligas");
let ucls = document.getElementById("ucls");
let wcs = document.getElementById("wcs");
let main = document.getElementById("main");
let mcategory = document.getElementById("mcategory");
let wevent = document.getElementById("sp-category");
let premt = document.getElementById("premt");
let ligat = document.getElementById("ligat");
let uclt = document.getElementById("uclt");
let wct = document.getElementById("wct");


start.addEventListener("click", () => {

    start.style.display = "none";
    prem.style.display = "block";
    laliga.style.display = "block";
    ucl.style.display = "block";
    wc.style.display = "block";
    main.style.display = "none";
    mcategory.style.display = "block";
    wevent.style.display = "block";
    premt.style.display = "block";
    ligat.style.display = "block";
    uclt.style.display = "block";
    wct.style.display = "block";
    
})


prem.addEventListener("click", () => {
    prem.style.display = "none";
    laliga.style.display = "none";
    ucl.style.display = "none";
    wc.style.display = "none";
    pvid.style.display = "none";
    mvid.style.display = "none";
    modal.style.display = "block";
    premierleague.style.display = "block";
    main.style.display = "none";
    mcategory.style.display = "none";
    wevent.style.display = "none";
    premt.style.display = "none";
    ligat.style.display = "none";
    uclt.style.display = "none";
    wct.style.display = "none";
    // document.body.style.backgroundImage = "url('epl bck ls.png')";
});


laliga.addEventListener("click", () => {
    prem.style.display = "none";
    laliga.style.display = "none";
    ucl.style.display = "none";
    wc.style.display = "none";
    pvid.style.display = "none";
    mvid.style.display = "none";
    modal.style.display = "block";
    laligas.style.display = "block";
    main.style.display = "none";
    mcategory.style.display = "none";
    wevent.style.display = "none";
    premt.style.display = "none";
    ligat.style.display = "none";
    uclt.style.display = "none";
    wct.style.display = "none";
    //document.body.style.backgroundImage = "url('laliga bck ls.png')";
 
});


ucl.addEventListener("click", () => {
    prem.style.display = "none";
    laliga.style.display = "none";
    ucl.style.display = "none";
    wc.style.display = "none";
    pvid.style.display = "none";
    mvid.style.display = "none";
    modal.style.display = "block";
    ucls.style.display = "block";
    main.style.display = "none";
    mcategory.style.display = "none";
    wevent.style.display = "none";
    premt.style.display = "none";
    ligat.style.display = "none";
    uclt.style.display = "none";
    wct.style.display = "none";
    //document.body.style.backgroundImage = "url('ucl bck ls.png')";
});

wc.addEventListener("click", () => {
    prem.style.display = "none";
    laliga.style.display = "none";
    ucl.style.display = "none";
    wc.style.display = "none";
    pvid.style.display = "none";
    mvid.style.display = "none";
    modal.style.display = "block";
    wcs.style.display = "block";
    mcategory.style.display = "none";
    wevent.style.display = "none";
    premt.style.display = "none";
    ligat.style.display = "none";
    uclt.style.display = "none";
    wct.style.display = "none";
    //document.body.style.backgroundImage = "url('wc bck ls.png')";
});

mstart.addEventListener("click", () => {
    modal.style.display = "none";

})


//Premier League //

let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let plind1 = document.getElementById("plind1");
let ans = document.getElementById("ans");
let score = 0;
let points = document.getElementById("points");
let next1 = document.getElementById("next1");
let prem1 = document.getElementById("prem1");
let prem2 = document.getElementById("prem2");
let prem3 = document.getElementById("prem3");

opt1.addEventListener("click", () => {
    opt1.style.display = "none";
    opt2.style.display = "none";
    opt3.style.display = "none";
    opt4.style.display = "none";
    ans.innerHTML = "Wrong!!<br>Alan Shearer scored 260 goals, mainly for Blackburn and Newcastle.";
    points.innerHTML = "Points: " + score;
    next1.style.display = "block";
})

opt2.addEventListener("click", () => {
    opt1.style.display = "none";
    opt2.style.display = "none";
    opt3.style.display = "none";
    opt4.style.display = "none";
    ans.innerHTML = "Wrong!!<br>Alan Shearer scored 260 goals, mainly for Blackburn and Newcastle.";
    points.innerHTML = "Points: " + score;
    next1.style.display = "block";
})

opt3.addEventListener("click", () => {
    opt1.style.display = "none";
    opt2.style.display = "none";
    opt3.style.display = "none";
    opt4.style.display = "none";
    ans.innerHTML = "Correct!!<br>Alan Shearer scored 260 goals, mainly for Blackburn and Newcastle.";
    score++;
    points.innerHTML = "Points: " + score;
    next1.style.display = "block";
})

opt4.addEventListener("click", () => {
    opt1.style.display = "none";
    opt2.style.display = "none";
    opt3.style.display = "none";
    opt4.style.display = "none";
    ans.innerHTML = "Wrong!!<br>Alan Shearer scored 260 goals, mainly for Blackburn and Newcastle.";
    points.innerHTML = "Points: " + score;
    next1.style.display = "block";
})

next1.addEventListener("click", () => {
    prem1.style.display = "none";
    prem2.style.display = "block";
})





let opt21 = document.getElementById("opt21");
let opt22 = document.getElementById("opt22");
let opt23 = document.getElementById("opt23");
let opt24 = document.getElementById("opt24");
let plind2 = document.getElementById("plind2");
let ans2 = document.getElementById("ans2");
let next2 = document.getElementById("next2");

opt21.addEventListener("click", () => {
    opt21.style.display = "none";
    opt22.style.display = "none";
    opt23.style.display = "none";
    opt24.style.display = "none";
    ans2.innerHTML = "Wrong!!<br> Jack Grealish famous for his dribbling and hair!";
    points.innerHTML = "Points: " + score;
    next2.style.display = "block";
})

opt22.addEventListener("click", () => {
    opt21.style.display = "none";
    opt22.style.display = "none";
    opt23.style.display = "none";
    opt24.style.display = "none";
    ans2.innerHTML = "Correct!!<br> Jack Grealish famous for his dribbling and hair!";
    score++;
    points.innerHTML = "Points: " + score;
    next2.style.display = "block";
})

opt23.addEventListener("click", () => {
    opt21.style.display = "none";
    opt22.style.display = "none";
    opt23.style.display = "none";
    opt24.style.display = "none";
    ans2.innerHTML = "Wrong!!<br> Jack Grealish famous for his dribbling and hair!";

    points.innerHTML = "Points: " + score;
    next2.style.display = "block";
})

opt24.addEventListener("click", () => {
    opt21.style.display = "none";
    opt22.style.display = "none";
    opt23.style.display = "none";
    opt24.style.display = "none";
    ans2.innerHTML = "Wrong!!<br> Jack Grealish famous for his dribbling and hair!";
    points.innerHTML = "Points: " + score;
    next2.style.display = "block";
})

next2.addEventListener("click", () => {
    prem2.style.display = "none";
    prem3.style.display = "block";
})





let opt31 = document.getElementById("opt31");
let opt32 = document.getElementById("opt32");
let opt33 = document.getElementById("opt33");
let opt34 = document.getElementById("opt34");
let plind3 = document.getElementById("plind3");
let ans3 = document.getElementById("ans3");
let next3 = document.getElementById("next3");

opt31.addEventListener("click", () => {
    opt31.style.display = "none";
    opt32.style.display = "none";
    opt33.style.display = "none";
    opt34.style.display = "none";
    ans3.innerHTML = "Wrong!!<br>Arsenal named after their origins as an armament factory team.";
    points.innerHTML = "Points: " + score;
    next3.style.display = "block";
})

opt32.addEventListener("click", () => {
    opt31.style.display = "none";
    opt32.style.display = "none";
    opt33.style.display = "none";
    opt34.style.display = "none";
    ans3.innerHTML = "Wrong!!<br>Arsenal named after their origins as an armament factory team.";

    points.innerHTML = "Points: " + score;
    next3.style.display = "block";
})

opt33.addEventListener("click", () => {
    opt31.style.display = "none";
    opt32.style.display = "none";
    opt33.style.display = "none";
    opt34.style.display = "none";
    score++;
    ans3.innerHTML = "Correct!!<br>Arsenal named after their origins as an armament factory team.";
    points.innerHTML = "Points: " + score;
    next3.style.display = "block";
})

opt34.addEventListener("click", () => {
    opt31.style.display = "none";
    opt32.style.display = "none";
    opt33.style.display = "none";
    opt34.style.display = "none";
    ans3.innerHTML = "Wrong!!<br>Arsenal named after their origins as an armament factory team.";
    points.innerHTML = "Points: " + score;
    next3.style.display = "block";
})

next3.addEventListener("click", () => {
    prem3.style.display = "none";
    prem4.style.display = "block";
})


let prem4 = document.getElementById("prem4");
let prem5 = document.getElementById("prem5");
let prem6 = document.getElementById("prem6");
let prem7 = document.getElementById("prem7");
let prem8 = document.getElementById("prem8");
let prem9 = document.getElementById("prem9");
let prem10 = document.getElementById("prem10");

// Question 4
let opt41 = document.getElementById("opt41");
let opt42 = document.getElementById("opt42");
let opt43 = document.getElementById("opt43");
let opt44 = document.getElementById("opt44");
let ans4 = document.getElementById("ans4");
let next4 = document.getElementById("next4");

opt41.addEventListener("click", () => {
    opt41.style.display = "none";
    opt42.style.display = "none";
    opt43.style.display = "none";
    opt44.style.display = "none";
    ans4.innerHTML = "Correct!!<br>Arsène Wenger led them unbeaten in 2003–04.";
    score++;
    points.innerHTML = "Points: " + score;
    next4.style.display = "block";
})
opt42.addEventListener("click", () => {
    opt41.style.display = "none";
    opt42.style.display = "none";
    opt43.style.display = "none";
    opt44.style.display = "none";
    ans4.innerHTML = "Wrong!!<br>Arsène Wenger led them unbeaten in 2003–04.";
    points.innerHTML = "Points: " + score;
    next4.style.display = "block";
})
opt43.addEventListener("click", () => {
    opt41.style.display = "none";
    opt42.style.display = "none";
    opt43.style.display = "none";
    opt44.style.display = "none";
    ans4.innerHTML = "Wrong!!<br>Arsène Wenger led them unbeaten in 2003–04.";
    points.innerHTML = "Points: " + score;
    next4.style.display = "block";
})
opt44.addEventListener("click", () => {
    opt41.style.display = "none";
    opt42.style.display = "none";
    opt43.style.display = "none";
    opt44.style.display = "none";
    ans4.innerHTML = "Wrong!!<br>Arsène Wenger led them unbeaten in 2003–04.";
    points.innerHTML = "Points: " + score;
    next4.style.display = "block";
})
next4.addEventListener("click", () => {
    prem4.style.display = "none";
    prem5.style.display = "block";
})

// Question 5
let opt51 = document.getElementById("opt51");
let opt52 = document.getElementById("opt52");
let opt53 = document.getElementById("opt53");
let opt54 = document.getElementById("opt54");
let ans5 = document.getElementById("ans5");
let next5 = document.getElementById("next5");

opt51.addEventListener("click", () => {
    opt51.style.display = "none";
    opt52.style.display = "none";
    opt53.style.display = "none";
    opt54.style.display = "none";
    ans5.innerHTML = "Wrong!!<br>Brighton Refers to their coastal location.";
    points.innerHTML = "Points: " + score;
    next5.style.display = "block";
})
opt52.addEventListener("click", () => {
    opt51.style.display = "none";
    opt52.style.display = "none";
    opt53.style.display = "none";
    opt54.style.display = "none";
    ans5.innerHTML = "Wrong!!<br>Brighton Refers to their coastal location.";

    points.innerHTML = "Points: " + score;
    next5.style.display = "block";
})
opt53.addEventListener("click", () => {
    opt51.style.display = "none";
    opt52.style.display = "none";
    opt53.style.display = "none";
    opt54.style.display = "none";
    score++;
    ans5.innerHTML = "Correct!!<br>Brighton Refers to their coastal location.";
    points.innerHTML = "Points: " + score;
    next5.style.display = "block";
})
opt54.addEventListener("click", () => {
    opt51.style.display = "none";
    opt52.style.display = "none";
    opt53.style.display = "none";
    opt54.style.display = "none";
    ans5.innerHTML = "Wrong!!<br>Brighton Refers to their coastal location.";
    points.innerHTML = "Points: " + score;
    next5.style.display = "block";
})
next5.addEventListener("click", () => {
    prem5.style.display = "none";
    prem6.style.display = "block";
})

// Question 6
let opt61 = document.getElementById("opt61");
let opt62 = document.getElementById("opt62");
let opt63 = document.getElementById("opt63");
let opt64 = document.getElementById("opt64");
let ans6 = document.getElementById("ans6");
let next6 = document.getElementById("next6");

opt61.addEventListener("click", () => {
    opt61.style.display = "none";
    opt62.style.display = "none";
    opt63.style.display = "none";
    opt64.style.display = "none";
    ans6.innerHTML = "Wrong!!<br>Petr Čech holds the record with 202 clean sheets.";
    points.innerHTML = "Points: " + score;
    next6.style.display = "block";
})
opt62.addEventListener("click", () => {
    opt61.style.display = "none";
    opt62.style.display = "none";
    opt63.style.display = "none";
    opt64.style.display = "none";
    ans6.innerHTML = "Correct!!<br>Petr Čech holds the record with 202 clean sheets.";
    score++;
    points.innerHTML = "Points: " + score;
    next6.style.display = "block";
})
opt63.addEventListener("click", () => {
    opt61.style.display = "none";
    opt62.style.display = "none";
    opt63.style.display = "none";
    opt64.style.display = "none";
    ans6.innerHTML = "Wrong!!<br>Petr Čech holds the record with 202 clean sheets.";
    points.innerHTML = "Points: " + score;
    next6.style.display = "block";
})
opt64.addEventListener("click", () => {
    opt61.style.display = "none";
    opt62.style.display = "none";
    opt63.style.display = "none";
    opt64.style.display = "none";
    ans6.innerHTML = "Wrong!!<br>Petr Čech holds the record with 202 clean sheets..";
    points.innerHTML = "Points: " + score;
    next6.style.display = "block";
})
next6.addEventListener("click", () => {
    prem6.style.display = "none";
    prem7.style.display = "block";
})

// Question 7
let opt71 = document.getElementById("opt71");
let opt72 = document.getElementById("opt72");
let opt73 = document.getElementById("opt73");
let opt74 = document.getElementById("opt74");
let ans7 = document.getElementById("ans7");
let next7 = document.getElementById("next7");

opt71.addEventListener("click", () => {
    opt71.style.display = "none";
    opt72.style.display = "none";
    opt73.style.display = "none";
    opt74.style.display = "none";
    ans7.innerHTML = "Wrong!!<br>Craig Bellamy Scored for: Coventry, Newcastle, Blackburn, Liverpool, West Ham, Man City, Cardiff.";
    points.innerHTML = "Points: " + score;
    next7.style.display = "block";
})
opt72.addEventListener("click", () => {
    opt71.style.display = "none";
    opt72.style.display = "none";
    opt73.style.display = "none";
    opt74.style.display = "none";
    ans7.innerHTML = "Wrong!!<br>Craig Bellamy Scored for: Coventry, Newcastle, Blackburn, Liverpool, West Ham, Man City, Cardiff.";

    points.innerHTML = "Points: " + score;
    next7.style.display = "block";
})
opt73.addEventListener("click", () => {
    opt71.style.display = "none";
    opt72.style.display = "none";
    opt73.style.display = "none";
    opt74.style.display = "none";
    ans7.innerHTML = "Wrong!!<br>Craig Bellamy Scored for: Coventry, Newcastle, Blackburn, Liverpool, West Ham, Man City, Cardiff.";
    points.innerHTML = "Points: " + score;
    next7.style.display = "block";
})
opt74.addEventListener("click", () => {
    opt71.style.display = "none";
    opt72.style.display = "none";
    opt73.style.display = "none";
    opt74.style.display = "none";
    score++;
    ans7.innerHTML = "Correct!!<br>Craig Bellamy Scored for: Coventry, Newcastle, Blackburn, Liverpool, West Ham, Man City, Cardiff.";
    points.innerHTML = "Points: " + score;
    next7.style.display = "block";
})
next7.addEventListener("click", () => {
    prem7.style.display = "none";
    prem8.style.display = "block";
})

// Question 8
let opt81 = document.getElementById("opt81");
let opt82 = document.getElementById("opt82");
let opt83 = document.getElementById("opt83");
let opt84 = document.getElementById("opt84");
let ans8 = document.getElementById("ans8");
let next8 = document.getElementById("next8");

opt81.addEventListener("click", () => {
    opt81.style.display = "none";
    opt82.style.display = "none";
    opt83.style.display = "none";
    opt84.style.display = "none";
    ans8.innerHTML = "Wrong!!<br>Ryan Giggs is the all-time Premier League assist leader.";
    points.innerHTML = "Points: " + score;
    next8.style.display = "block";
})
opt82.addEventListener("click", () => {
    opt81.style.display = "none";
    opt82.style.display = "none";
    opt83.style.display = "none";
    opt84.style.display = "none";
    ans8.innerHTML = "Correct!!<br>Ryan Giggs is the all-time Premier League assist leader.";
    score++;
    points.innerHTML = "Points: " + score;
    next8.style.display = "block";
})
opt83.addEventListener("click", () => {
    opt81.style.display = "none";
    opt82.style.display = "none";
    opt83.style.display = "none";
    opt84.style.display = "none";
    ans8.innerHTML = "Wrong!!<br>Ryan Giggs is the all-time Premier League assist leader.";
    points.innerHTML = "Points: " + score;
    next8.style.display = "block";
})
opt84.addEventListener("click", () => {
    opt81.style.display = "none";
    opt82.style.display = "none";
    opt83.style.display = "none";
    opt84.style.display = "none";
    ans8.innerHTML = "Wrong!!<br>Ryan Giggs is the all-time Premier League assist leader.";
    points.innerHTML = "Points: " + score;
    next8.style.display = "block";
})
next8.addEventListener("click", () => {
    prem8.style.display = "none";
    prem9.style.display = "block";
})

// Question 9
let opt91 = document.getElementById("opt91");
let opt92 = document.getElementById("opt92");
let opt93 = document.getElementById("opt93");
let opt94 = document.getElementById("opt94");
let ans9 = document.getElementById("ans9");
let next9 = document.getElementById("next9");

opt91.addEventListener("click", () => {
    opt91.style.display = "none";
    opt92.style.display = "none";
    opt93.style.display = "none";
    opt94.style.display = "none";
    ans9.innerHTML = "Wrong!!<br> Matt Le Tissier Scored one with left, right, and header early in PL era.";
    points.innerHTML = "Points: " + score;
    next9.style.display = "block";
})
opt92.addEventListener("click", () => {
    opt91.style.display = "none";
    opt92.style.display = "none";
    opt93.style.display = "none";
    opt94.style.display = "none";
    ans9.innerHTML = "Wrong!!<br> Matt Le Tissier Scored one with left, right, and header early in PL era.";
    points.innerHTML = "Points: " + score;
    next9.style.display = "block";
})
opt93.addEventListener("click", () => {
    opt91.style.display = "none";
    opt92.style.display = "none";
    opt93.style.display = "none";
    opt94.style.display = "none";
    ans9.innerHTML = "Correct!!<br>Matt Le Tissier Scored one with left, right, and header early in PL era.";
    score++;
    points.innerHTML = "Points: " + score;
    next9.style.display = "block";
})
opt94.addEventListener("click", () => {
    opt91.style.display = "none";
    opt92.style.display = "none";
    opt93.style.display = "none";
    opt94.style.display = "none";
    ans9.innerHTML = "Wrong!!<br> Matt Le Tissier Scored one with left, right, and header early in PL era.";
    points.innerHTML = "Points: " + score;
    next9.style.display = "block";
})
next9.addEventListener("click", () => {
    prem9.style.display = "none";
    prem10.style.display = "block";
})

// Question 10
let opt101 = document.getElementById("opt101");
let opt102 = document.getElementById("opt102");
let opt103 = document.getElementById("opt103");
let opt104 = document.getElementById("opt104");
let ans10 = document.getElementById("ans10");
let next10 = document.getElementById("next10");

opt101.addEventListener("click", () => {
    opt101.style.display = "none";
    opt102.style.display = "none";
    opt103.style.display = "none";
    opt104.style.display = "none";
    ans10.innerHTML = "Correct!!<br>Aleksandar Mitrović Did it for Fulham — goal, assist, red.";
    score++;
    points.innerHTML = "Points: " + score;
    next10.style.display = "block";
})
opt102.addEventListener("click", () => {
    opt101.style.display = "none";
    opt102.style.display = "none";
    opt103.style.display = "none";
    opt104.style.display = "none";
    ans10.innerHTML = "Wrong!!<br>Aleksandar Mitrović Did it for Fulham — goal, assist, red.";
    points.innerHTML = "Points: " + score;
    next10.style.display = "block";
})
opt103.addEventListener("click", () => {
    opt101.style.display = "none";
    opt102.style.display = "none";
    opt103.style.display = "none";
    opt104.style.display = "none";
    ans10.innerHTML = "Wrong!!<br>Aleksandar Mitrović Did it for Fulham — goal, assist, red.";
    points.innerHTML = "Points: " + score;
    next10.style.display = "block";
})
opt104.addEventListener("click", () => {
    opt101.style.display = "none";
    opt102.style.display = "none";
    opt103.style.display = "none";
    opt104.style.display = "none";
    ans10.innerHTML = "Wrong!!<br>Aleksandar Mitrović Did it for Fulham — goal, assist, red.";
    points.innerHTML = "Points: " + score;
    next10.style.display = "block";
})


let res = document.getElementById("res");
let comp = document.getElementById("comp");
let premend = document.getElementById("premend");
let rty = document.getElementById("rty");



next10.addEventListener("click", () => {
    prem10.style.display = "none";
    rty.style.display = "block";
    premend.style.display = "block";
    res.innerHTML = "Your final score is: " + score;

    if (score >= 7) {
        comp.innerHTML = "You did incredible. The way you understand the game, it's beautiful. Like Messi in 2011.  -Pep Guardiola";
        comp.style.display = "block";
    }
    else if (score >= 5) { // Corrected condition: covers 5 <= i < 7
        comp.innerHTML = 'Decent. Not special… yet.   -Jose Mourinho';
        comp.style.display = "block";
    }
    else { // This now correctly covers i < 5
        comp.innerHTML = 'This is not football. This is comedy.   -Jose Mourinho';
        comp.style.display = "block";
    }

    rty.addEventListener("click", () => {
        window.location.reload();
    })


})

// La Liga Quiz Logic
let lascore = 0;
let llpoints = document.getElementById("llpoints");

// Question 1
let laopt1 = document.getElementById("laopt1");
let laopt2 = document.getElementById("laopt2");
let laopt3 = document.getElementById("laopt3");
let laopt4 = document.getElementById("laopt4");
let laans = document.getElementById("laans");
let lanext1 = document.getElementById("lanext1");
let liga1 = document.getElementById("liga1");
let liga2 = document.getElementById("liga2");

laopt1.addEventListener("click", () => {

    laopt1.style.display = "none";
    laopt2.style.display = "none";
    laopt3.style.display = "none";
    laopt4.style.display = "none";
    laans.innerHTML = "Wrong!!<br>Correct answer is Lionel Messi.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext1.style.display = "block";
});
laopt2.addEventListener("click", () => {
    laopt1.style.display = "none";
    laopt2.style.display = "none";
    laopt3.style.display = "none";
    laopt4.style.display = "none";
    laans.innerHTML = "Wrong!!<br>Correct answer is Lionel Messi.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext1.style.display = "block";
});
laopt3.addEventListener("click", () => {
    laopt1.style.display = "none";
    laopt2.style.display = "none";
    laopt3.style.display = "none";
    laopt4.style.display = "none";
    laans.innerHTML = "Correct!!<br>Lionel Messi is the all-time top scorer.";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext1.style.display = "block";
});
laopt4.addEventListener("click", () => {
    laopt1.style.display = "none";
    laopt2.style.display = "none";
    laopt3.style.display = "none";
    laopt4.style.display = "none";
    laans.innerHTML = "Wrong!!<br>Correct answer is Lionel Messi.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext1.style.display = "block";
});
lanext1.addEventListener("click", () => {
    liga1.style.display = "none";
    liga2.style.display = "block";
});

// Question 2
let laopt21 = document.getElementById("laopt21");
let laopt22 = document.getElementById("laopt22");
let laopt23 = document.getElementById("laopt23");
let laopt24 = document.getElementById("laopt24");
let laans2 = document.getElementById("laans2");
let lanext2 = document.getElementById("lanext2");
let liga3 = document.getElementById("liga3");

laopt21.addEventListener("click", () => {
    laopt21.style.display = "none";
    laopt22.style.display = "none";
    laopt23.style.display = "none";
    laopt24.style.display = "none";
    laans2.innerHTML = "Wrong!!<br>Correct answer is Real Madrid.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext2.style.display = "block";
});
laopt22.addEventListener("click", () => {
    laopt21.style.display = "none";
    laopt22.style.display = "none";
    laopt23.style.display = "none";
    laopt24.style.display = "none";
    laans2.innerHTML = "Wrong!!<br>Correct answer is Real Madrid.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext2.style.display = "block";
});
laopt23.addEventListener("click", () => {
    laopt21.style.display = "none";
    laopt22.style.display = "none";
    laopt23.style.display = "none";
    laopt24.style.display = "none";
    laans2.innerHTML = "Correct!!<br>Real Madrid has the most La Liga titles.";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext2.style.display = "block";
});
laopt24.addEventListener("click", () => {
    laopt21.style.display = "none";
    laopt22.style.display = "none";
    laopt23.style.display = "none";
    laopt24.style.display = "none";
    laans2.innerHTML = "Wrong!!<br>Correct answer is Real Madrid.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext2.style.display = "block";
});
lanext2.addEventListener("click", () => {
    liga2.style.display = "none";
    liga3.style.display = "block";
});

// Question 3
let laopt31 = document.getElementById("laopt31");
let laopt32 = document.getElementById("laopt32");
let laopt33 = document.getElementById("laopt33");
let laopt34 = document.getElementById("laopt34");
let laans3 = document.getElementById("laans3");
let lanext3 = document.getElementById("lanext3");
let liga4 = document.getElementById("liga4");

laopt31.addEventListener("click", () => {
    laopt31.style.display = "none";
    laopt32.style.display = "none";
    laopt33.style.display = "none";
    laopt34.style.display = "none";
    laans3.innerHTML = "Correct!!<br>Fernando Torres is 'El Niño'.";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext3.style.display = "block";
});
laopt32.addEventListener("click", () => {
    laopt31.style.display = "none";
    laopt32.style.display = "none";
    laopt33.style.display = "none";
    laopt34.style.display = "none";
    laans3.innerHTML = "Wrong!!<br>Correct answer is Fernando Torres.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext3.style.display = "block";
});
laopt33.addEventListener("click", () => {
    laopt31.style.display = "none";
    laopt32.style.display = "none";
    laopt33.style.display = "none";
    laopt34.style.display = "none";
    laans3.innerHTML = "Wrong!!<br>Correct answer is Fernando Torres.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext3.style.display = "block";
});
laopt34.addEventListener("click", () => {
    laopt31.style.display = "none";
    laopt32.style.display = "none";
    laopt33.style.display = "none";
    laopt34.style.display = "none";
    laans3.innerHTML = "Wrong!!<br>Correct answer is Fernando Torres.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext3.style.display = "block";
});
lanext3.addEventListener("click", () => {
    liga3.style.display = "none";
    liga4.style.display = "block";
});

// Question 4
let laopt41 = document.getElementById("laopt41");
let laopt42 = document.getElementById("laopt42");
let laopt43 = document.getElementById("laopt43");
let laopt44 = document.getElementById("laopt44");
let laans4 = document.getElementById("laans4");
let lanext4 = document.getElementById("lanext4");
let liga5 = document.getElementById("liga5");

laopt41.addEventListener("click", () => {
    laopt41.style.display = "none";
    laopt42.style.display = "none";
    laopt43.style.display = "none";
    laopt44.style.display = "none";
    laans4.innerHTML = "Correct!!<br>Athletic Bilbao went unbeaten in 1929-30.";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext4.style.display = "block";
});
laopt42.addEventListener("click", () => {
    laopt41.style.display = "none";
    laopt42.style.display = "none";
    laopt43.style.display = "none";
    laopt44.style.display = "none";
    laans4.innerHTML = "Wrong!!<br>Correct answer is Athletic Bilbao.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext4.style.display = "block";
});
laopt43.addEventListener("click", () => {
    laopt41.style.display = "none";
    laopt42.style.display = "none";
    laopt43.style.display = "none";
    laopt44.style.display = "none";
    laans4.innerHTML = "Wrong!!<br>Correct answer is Athletic Bilbao.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext4.style.display = "block";
});
laopt44.addEventListener("click", () => {
    laopt41.style.display = "none";
    laopt42.style.display = "none";
    laopt43.style.display = "none";
    laopt44.style.display = "none";
    laans4.innerHTML = "Wrong!!<br>Correct answer is Athletic Bilbao.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext4.style.display = "block";
});
lanext4.addEventListener("click", () => {
    liga4.style.display = "none";
    liga5.style.display = "block";
});

// Question 5
let laopt51 = document.getElementById("laopt51");
let laopt52 = document.getElementById("laopt52");
let laopt53 = document.getElementById("laopt53");
let laopt54 = document.getElementById("laopt54");
let laans5 = document.getElementById("laans5");
let lanext5 = document.getElementById("lanext5");
let liga6 = document.getElementById("liga6");

laopt51.addEventListener("click", () => {
    laopt51.style.display = "none";
    laopt52.style.display = "none";
    laopt53.style.display = "none";
    laopt54.style.display = "none";
    laans5.innerHTML = "Wrong!!<br>Correct answer is Kevin Gameiro.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext5.style.display = "block";
});
laopt52.addEventListener("click", () => {
    laopt51.style.display = "none";
    laopt52.style.display = "none";
    laopt53.style.display = "none";
    laopt54.style.display = "none";
    laans5.innerHTML = "Wrong!!<br>Correct answer is Kevin Gameiro.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext5.style.display = "block";
});
laopt53.addEventListener("click", () => {
    laopt51.style.display = "none";
    laopt52.style.display = "none";
    laopt53.style.display = "none";
    laopt54.style.display = "none";
    laans5.innerHTML = "Correct!!<br>Kevin Gameiro scored the fastest hat-trick.";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext5.style.display = "block";
});
laopt54.addEventListener("click", () => {
    laopt51.style.display = "none";
    laopt52.style.display = "none";
    laopt53.style.display = "none";
    laopt54.style.display = "none";
    laans5.innerHTML = "Wrong!!<br>Correct answer is Kevin Gameiro.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext5.style.display = "block";
});
lanext5.addEventListener("click", () => {
    liga5.style.display = "none";
    liga6.style.display = "block";
});

// Question 6
let laopt61 = document.getElementById("laopt61");
let laopt62 = document.getElementById("laopt62");
let laopt63 = document.getElementById("laopt63");
let laopt64 = document.getElementById("laopt64");
let laans6 = document.getElementById("laans6");
let lanext6 = document.getElementById("lanext6");
let liga7 = document.getElementById("liga7");

laopt61.addEventListener("click", () => {
    laopt61.style.display = "none";
    laopt62.style.display = "none";
    laopt63.style.display = "none";
    laopt64.style.display = "none";
    laans6.innerHTML = "Correct!!<br>Iker Casillas has the most clean sheets.";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext6.style.display = "block";
});
laopt62.addEventListener("click", () => {
    laopt61.style.display = "none";
    laopt62.style.display = "none";
    laopt63.style.display = "none";
    laopt64.style.display = "none";
    laans6.innerHTML = "Wrong!!<br>Correct answer is Iker Casillas.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext6.style.display = "block";
});
laopt63.addEventListener("click", () => {
    laopt61.style.display = "none";
    laopt62.style.display = "none";
    laopt63.style.display = "none";
    laopt64.style.display = "none";
    laans6.innerHTML = "Wrong!!<br>Correct answer is Iker Casillas.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext6.style.display = "block";
});
laopt64.addEventListener("click", () => {
    laopt61.style.display = "none";
    laopt62.style.display = "none";
    laopt63.style.display = "none";
    laopt64.style.display = "none";
    laans6.innerHTML = "Wrong!!<br>Correct answer is Iker Casillas.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext6.style.display = "block";
});
lanext6.addEventListener("click", () => {
    liga6.style.display = "none";
    liga7.style.display = "block";
});

// Question 7
let laopt71 = document.getElementById("laopt71");
let laopt72 = document.getElementById("laopt72");
let laopt73 = document.getElementById("laopt73");
let laopt74 = document.getElementById("laopt74");
let laans7 = document.getElementById("laans7");
let lanext7 = document.getElementById("lanext7");
let liga8 = document.getElementById("liga8");

laopt71.addEventListener("click", () => {
    laopt71.style.display = "none";
    laopt72.style.display = "none";
    laopt73.style.display = "none";
    laopt74.style.display = "none";
    laans7.innerHTML = "Wrong!!<br>Correct answer is Hugo Sánchez.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext7.style.display = "block";
});
laopt72.addEventListener("click", () => {
    laopt71.style.display = "none";
    laopt72.style.display = "none";
    laopt73.style.display = "none";
    laopt74.style.display = "none";
    laans7.innerHTML = "Correct!!<br>Hugo Sánchez was the first non-Spanish Pichichi winner.";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext7.style.display = "block";
});
laopt73.addEventListener("click", () => {
    laopt71.style.display = "none";
    laopt72.style.display = "none";
    laopt73.style.display = "none";
    laopt74.style.display = "none";
    laans7.innerHTML = "Wrong!!<br>Correct answer is Hugo Sánchez.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext7.style.display = "block";
});
laopt74.addEventListener("click", () => {
    laopt71.style.display = "none";
    laopt72.style.display = "none";
    laopt73.style.display = "none";
    laopt74.style.display = "none";
    laans7.innerHTML = "Wrong!!<br>Correct answer is Hugo Sánchez.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext7.style.display = "block";
});
lanext7.addEventListener("click", () => {
    liga7.style.display = "none";
    liga8.style.display = "block";
});

// Question 8
let laopt81 = document.getElementById("laopt81");
let laopt82 = document.getElementById("laopt82");
let laopt83 = document.getElementById("laopt83");
let laopt84 = document.getElementById("laopt84");
let laans8 = document.getElementById("laans8");
let lanext8 = document.getElementById("lanext8");
let liga9 = document.getElementById("liga9");

laopt81.addEventListener("click", () => {
    laopt81.style.display = "none";
    laopt82.style.display = "none";
    laopt83.style.display = "none";
    laopt84.style.display = "none";
    laans8.innerHTML = "Correct!!<br>Athletic Bilbao has never been relegated.";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext8.style.display = "block";
});
laopt82.addEventListener("click", () => {
    laopt81.style.display = "none";
    laopt82.style.display = "none";
    laopt83.style.display = "none";
    laopt84.style.display = "none";
    laans8.innerHTML = "Wrong!!<br>Correct answer is Athletic Bilbao.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext8.style.display = "block";
});
laopt83.addEventListener("click", () => {
    laopt81.style.display = "none";
    laopt82.style.display = "none";
    laopt83.style.display = "none";
    laopt84.style.display = "none";
    laans8.innerHTML = "Wrong!!<br>Correct answer is Athletic Bilbao.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext8.style.display = "block";
});
laopt84.addEventListener("click", () => {
    laopt81.style.display = "none";
    laopt82.style.display = "none";
    laopt83.style.display = "none";
    laopt84.style.display = "none";
    laans8.innerHTML = "Wrong!!<br>Correct answer is Athletic Bilbao.";
    llpoints.innerHTML = "Points: " + lascore;
    lanext8.style.display = "block";
});
lanext8.addEventListener("click", () => {
    liga8.style.display = "none";
    liga9.style.display = "block";
});

// Question 9
let laopt91 = document.getElementById("laopt91");
let laopt92 = document.getElementById("laopt92");
let laopt93 = document.getElementById("laopt93");
let laopt94 = document.getElementById("laopt94");
let laans9 = document.getElementById("laans9");
let lanext9 = document.getElementById("lanext9");
let liga10 = document.getElementById("liga10");

laopt91.addEventListener("click", () => {
    laopt91.style.display = "none";
    laopt92.style.display = "none";
    laopt93.style.display = "none";
    laopt94.style.display = "none";
    laans9.innerHTML = "Wrong!!<br>Lionel Messi scored against all the laliga teams";
    llpoints.innerHTML = "Points: " + lascore;
    lanext9.style.display = "block";
});
laopt92.addEventListener("click", () => {
    laopt91.style.display = "none";
    laopt92.style.display = "none";
    laopt93.style.display = "none";
    laopt94.style.display = "none";
    laans9.innerHTML = "Wrong!!<br>Lionel Messi scored against all the laliga teams";
    llpoints.innerHTML = "Points: " + lascore;
    lanext9.style.display = "block";
});
laopt93.addEventListener("click", () => {
    laopt91.style.display = "none";
    laopt92.style.display = "none";
    laopt93.style.display = "none";
    laopt94.style.display = "none";
    laans9.innerHTML = "Correct!!<br>Lionel Messi scored against all the laliga teams";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext9.style.display = "block";
});
laopt94.addEventListener("click", () => {
    laopt91.style.display = "none";
    laopt92.style.display = "none";
    laopt93.style.display = "none";
    laopt94.style.display = "none";
    laans9.innerHTML = "Wrong!!<br>Lionel Messi scored against all the laliga teams";
    llpoints.innerHTML = "Points: " + lascore;
    lanext9.style.display = "block";
});
lanext9.addEventListener("click", () => {
    liga9.style.display = "none";
    liga10.style.display = "block";
});

// Question 10
let laopt101 = document.getElementById("laopt101");
let laopt102 = document.getElementById("laopt102");
let laopt103 = document.getElementById("laopt103");
let laopt104 = document.getElementById("laopt104");
let laans10 = document.getElementById("laans10");
let lanext10 = document.getElementById("lanext10");
let ligaend = document.getElementById("ligaend");
let lares = document.getElementById("lares");
let lacom = document.getElementById("lacom");
let larty = document.getElementById("larty");

laopt101.addEventListener("click", () => {
    laopt101.style.display = "none";
    laopt102.style.display = "none";
    laopt103.style.display = "none";
    laopt104.style.display = "none";
    laans10.innerHTML = "Correct!!<br>Lamine Yamal is the youngest to score in El Clásico";
    lascore++;
    llpoints.innerHTML = "Points: " + lascore;
    lanext10.style.display = "block";
});
laopt102.addEventListener("click", () => {
    laopt101.style.display = "none";
    laopt102.style.display = "none";
    laopt103.style.display = "none";
    laopt104.style.display = "none";
    laans10.innerHTML = "Wrong!!<br>Lamine Yamal is the youngest to score in El Clásico";
    llpoints.innerHTML = "Points: " + lascore;
    lanext10.style.display = "block";
});
laopt103.addEventListener("click", () => {
    laopt101.style.display = "none";
    laopt102.style.display = "none";
    laopt103.style.display = "none";
    laopt104.style.display = "none";
    laans10.innerHTML = "Wrong!!<br>Lamine Yamal is the youngest to score in El Clásico";
    llpoints.innerHTML = "Points: " + lascore;
    lanext10.style.display = "block";
});
laopt104.addEventListener("click", () => {
    laopt101.style.display = "none";
    laopt102.style.display = "none";
    laopt103.style.display = "none";
    laopt104.style.display = "none";
    laans10.innerHTML = "Wrong!!<br>Lamine Yamal is the youngest to score in El Clásico";
    llpoints.innerHTML = "Points: " + lascore;
    lanext10.style.display = "block";
});
lanext10.addEventListener("click", () => {
    liga10.style.display = "none";
    larty.style.display = "block";
    ligaend.style.display = "block";
    lares.innerHTML = "Your final score is: " + lascore;
    if (lascore >= 7) {
        lacom.innerHTML = "You did incredible. The way you understand the game, it's beautiful. Like Messi in 2011.  -Pep Guardiola";
        lacom.style.display = "block";
    }
    else if (lascore >= 5) {
        lacom.innerHTML = 'Decent. Not special… yet.   -Jose Mourinho';
        lacom.style.display = "block";
    }
    else {
        lacom.innerHTML = 'This is not football. This is comedy.   -Jose Mourinho';
        lacom.style.display = "block";
    }
    larty.addEventListener("click", () => {
        window.location.reload();
    });
});







// UCL Quiz
document.getElementById("ucl").addEventListener("click", () => {
    prem.style.display = "none";
    laliga.style.display = "none";
    ucl.style.display = "none";
    wc.style.display = "none";
    pvid.style.display = "none";
    modal.style.display = "block";
    document.getElementById("championsleague").style.display = "block";
    document.body.style.backgroundImage = "url('bck.png')";
});

let uclScore = 0;
let uclpoints = document.getElementById("uclpoints");

// Question 1
let uclopt1 = document.getElementById("uclopt1");
let uclopt2 = document.getElementById("uclopt2");
let uclopt3 = document.getElementById("uclopt3");
let uclopt4 = document.getElementById("uclopt4");
let uclans = document.getElementById("uclans");
let uclnext1 = document.getElementById("uclnext1");

uclopt1.addEventListener("click", () => {
    uclopt1.style.display = "none";
    uclopt2.style.display = "none";
    uclopt3.style.display = "none";
    uclopt4.style.display = "none";
    uclans.innerHTML = "Wrong!!<br>Real Madrid has won the most UCL titles with 14 trophies.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext1.style.display = "block";
});

uclopt2.addEventListener("click", () => {
    uclopt1.style.display = "none";
    uclopt2.style.display = "none";
    uclopt3.style.display = "none";
    uclopt4.style.display = "none";
    uclans.innerHTML = "Wrong!!<br>Real Madrid has won the most UCL titles with 14 trophies.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext1.style.display = "block";
});

uclopt3.addEventListener("click", () => {
    uclopt1.style.display = "none";
    uclopt2.style.display = "none";
    uclopt3.style.display = "none";
    uclopt4.style.display = "none";
    uclans.innerHTML = "Correct!!<br>Real Madrid has won the most UCL titles with 14 trophies.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext1.style.display = "block";
});

uclopt4.addEventListener("click", () => {
    uclopt1.style.display = "none";
    uclopt2.style.display = "none";
    uclopt3.style.display = "none";
    uclopt4.style.display = "none";
    uclans.innerHTML = "Wrong!!<br>Real Madrid has won the most UCL titles with 14 trophies.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext1.style.display = "block";
});

uclnext1.addEventListener("click", () => {
    document.getElementById("ucl1").style.display = "none";
    document.getElementById("ucl2").style.display = "block";
});

// Question 2
let uclopt21 = document.getElementById("uclopt21");
let uclopt22 = document.getElementById("uclopt22");
let uclopt23 = document.getElementById("uclopt23");
let uclopt24 = document.getElementById("uclopt24");
let uclans2 = document.getElementById("uclans2");
let uclnext2 = document.getElementById("uclnext2");

uclopt21.addEventListener("click", () => {
    uclopt21.style.display = "none";
    uclopt22.style.display = "none";
    uclopt23.style.display = "none";
    uclopt24.style.display = "none";
    uclans2.innerHTML = "Wrong!!<br>Cristiano Ronaldo is the all-time top scorer with 140 goals.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext2.style.display = "block";
});

uclopt22.addEventListener("click", () => {
    uclopt21.style.display = "none";
    uclopt22.style.display = "none";
    uclopt23.style.display = "none";
    uclopt24.style.display = "none";
    uclans2.innerHTML = "Wrong!!<br>Cristiano Ronaldo is the all-time top scorer with 140 goals.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext2.style.display = "block";
});

uclopt23.addEventListener("click", () => {
    uclopt21.style.display = "none";
    uclopt22.style.display = "none";
    uclopt23.style.display = "none";
    uclopt24.style.display = "none";
    uclans2.innerHTML = "Correct!!<br>Cristiano Ronaldo is the all-time top scorer with 140 goals.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext2.style.display = "block";
});

uclopt24.addEventListener("click", () => {
    uclopt21.style.display = "none";
    uclopt22.style.display = "none";
    uclopt23.style.display = "none";
    uclopt24.style.display = "none";
    uclans2.innerHTML = "Wrong!!<br>Cristiano Ronaldo is the all-time top scorer with 140 goals.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext2.style.display = "block";
});

uclnext2.addEventListener("click", () => {
    document.getElementById("ucl2").style.display = "none";
    document.getElementById("ucl3").style.display = "block";
});

// Question 3
let uclopt31 = document.getElementById("uclopt31");
let uclopt32 = document.getElementById("uclopt32");
let uclopt33 = document.getElementById("uclopt33");
let uclopt34 = document.getElementById("uclopt34");
let uclans3 = document.getElementById("uclans3");
let uclnext3 = document.getElementById("uclnext3");

uclopt31.addEventListener("click", () => {
    uclopt31.style.display = "none";
    uclopt32.style.display = "none";
    uclopt33.style.display = "none";
    uclopt34.style.display = "none";
    uclans3.innerHTML = "Correct!!<br>Celtic won the first treble in 1967.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext3.style.display = "block";
});

uclopt32.addEventListener("click", () => {
    uclopt31.style.display = "none";
    uclopt32.style.display = "none";
    uclopt33.style.display = "none";
    uclopt34.style.display = "none";
    uclans3.innerHTML = "Wrong!!<br>Celtic won the first treble in 1967.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext3.style.display = "block";
});

uclopt33.addEventListener("click", () => {
    uclopt31.style.display = "none";
    uclopt32.style.display = "none";
    uclopt33.style.display = "none";
    uclopt34.style.display = "none";
    uclans3.innerHTML = "Wrong!!<br>Celtic won the first treble in 1967.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext3.style.display = "block";
});

uclopt34.addEventListener("click", () => {
    uclopt31.style.display = "none";
    uclopt32.style.display = "none";
    uclopt33.style.display = "none";
    uclopt34.style.display = "none";
    uclans3.innerHTML = "Wrong!!<br>Celtic won the first treble in 1967.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext3.style.display = "block";
});

uclnext3.addEventListener("click", () => {
    document.getElementById("ucl3").style.display = "none";
    document.getElementById("ucl4").style.display = "block";
});

// Question 4
let uclopt41 = document.getElementById("uclopt41");
let uclopt42 = document.getElementById("uclopt42");
let uclopt43 = document.getElementById("uclopt43");
let uclopt44 = document.getElementById("uclopt44");
let uclans4 = document.getElementById("uclans4");
let uclnext4 = document.getElementById("uclnext4");

uclopt41.addEventListener("click", () => {
    uclopt41.style.display = "none";
    uclopt42.style.display = "none";
    uclopt43.style.display = "none";
    uclopt44.style.display = "none";
    uclans4.innerHTML = "Wrong!!<br>Lionel Messi holds the record with 42 assists.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext4.style.display = "block";
});

uclopt42.addEventListener("click", () => {
    uclopt41.style.display = "none";
    uclopt42.style.display = "none";
    uclopt43.style.display = "none";
    uclopt44.style.display = "none";
    uclans4.innerHTML = "Correct!!<br>Lionel Messi holds the record with 42 assists.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext4.style.display = "block";
});

uclopt43.addEventListener("click", () => {
    uclopt41.style.display = "none";
    uclopt42.style.display = "none";
    uclopt43.style.display = "none";
    uclopt44.style.display = "none";
    uclans4.innerHTML = "Wrong!!<br>Lionel Messi holds the record with 42 assists.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext4.style.display = "block";
});

uclopt44.addEventListener("click", () => {
    uclopt41.style.display = "none";
    uclopt42.style.display = "none";
    uclopt43.style.display = "none";
    uclopt44.style.display = "none";
    uclans4.innerHTML = "Wrong!!<br>Lionel Messi holds the record with 42 assists.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext4.style.display = "block";
});

uclnext4.addEventListener("click", () => {
    document.getElementById("ucl4").style.display = "none";
    document.getElementById("ucl5").style.display = "block";
});

// Question 5
let uclopt51 = document.getElementById("uclopt51");
let uclopt52 = document.getElementById("uclopt52");
let uclopt53 = document.getElementById("uclopt53");
let uclopt54 = document.getElementById("uclopt54");
let uclans5 = document.getElementById("uclans5");
let uclnext5 = document.getElementById("uclnext5");

uclopt51.addEventListener("click", () => {
    uclopt51.style.display = "none";
    uclopt52.style.display = "none";
    uclopt53.style.display = "none";
    uclopt54.style.display = "none";
    uclans5.innerHTML = "Correct!!<br>Iker Casillas has 57 clean sheets in the Champions League.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext5.style.display = "block";
});

uclopt52.addEventListener("click", () => {
    uclopt51.style.display = "none";
    uclopt52.style.display = "none";
    uclopt53.style.display = "none";
    uclopt54.style.display = "none";
    uclans5.innerHTML = "Wrong!!<br>Iker Casillas has 57 clean sheets in the Champions League.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext5.style.display = "block";
});

uclopt53.addEventListener("click", () => {
    uclopt51.style.display = "none";
    uclopt52.style.display = "none";
    uclopt53.style.display = "none";
    uclopt54.style.display = "none";
    uclans5.innerHTML = "Wrong!!<br>Iker Casillas has 57 clean sheets in the Champions League.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext5.style.display = "block";
});

uclopt54.addEventListener("click", () => {
    uclopt51.style.display = "none";
    uclopt52.style.display = "none";
    uclopt53.style.display = "none";
    uclopt54.style.display = "none";
    uclans5.innerHTML = "Wrong!!<br>Iker Casillas has 57 clean sheets in the Champions League.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext5.style.display = "block";
});

uclnext5.addEventListener("click", () => {
    document.getElementById("ucl5").style.display = "none";
    document.getElementById("ucl6").style.display = "block";
});

// Question 6
let uclopt61 = document.getElementById("uclopt61");
let uclopt62 = document.getElementById("uclopt62");
let uclopt63 = document.getElementById("uclopt63");
let uclopt64 = document.getElementById("uclopt64");
let uclans6 = document.getElementById("uclans6");
let uclnext6 = document.getElementById("uclnext6");

uclopt61.addEventListener("click", () => {
    uclopt61.style.display = "none";
    uclopt62.style.display = "none";
    uclopt63.style.display = "none";
    uclopt64.style.display = "none";
    uclans6.innerHTML = "Correct!!<br>Bayern Munich went 43 matches unbeaten at home.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext6.style.display = "block";
});

uclopt62.addEventListener("click", () => {
    uclopt61.style.display = "none";
    uclopt62.style.display = "none";
    uclopt63.style.display = "none";
    uclopt64.style.display = "none";
    uclans6.innerHTML = "Wrong!!<br>Bayern Munich went 43 matches unbeaten at home.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext6.style.display = "block";
});

uclopt63.addEventListener("click", () => {
    uclopt61.style.display = "none";
    uclopt62.style.display = "none";
    uclopt63.style.display = "none";
    uclopt64.style.display = "none";
    uclans6.innerHTML = "Wrong!!<br>Bayern Munich went 43 matches unbeaten at home.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext6.style.display = "block";
});

uclopt64.addEventListener("click", () => {
    uclopt61.style.display = "none";
    uclopt62.style.display = "none";
    uclopt63.style.display = "none";
    uclopt64.style.display = "none";
    uclans6.innerHTML = "Wrong!!<br>Bayern Munich went 43 matches unbeaten at home.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext6.style.display = "block";
});

uclnext6.addEventListener("click", () => {
    document.getElementById("ucl6").style.display = "none";
    document.getElementById("ucl7").style.display = "block";
});

// Question 7
let uclopt71 = document.getElementById("uclopt71");
let uclopt72 = document.getElementById("uclopt72");
let uclopt73 = document.getElementById("uclopt73");
let uclopt74 = document.getElementById("uclopt74");
let uclans7 = document.getElementById("uclans7");
let uclnext7 = document.getElementById("uclnext7");

uclopt71.addEventListener("click", () => {
    uclopt71.style.display = "none";
    uclopt72.style.display = "none";
    uclopt73.style.display = "none";
    uclopt74.style.display = "none";
    uclans7.innerHTML = "Wrong!!<br>Paolo Maldini scored after 50 seconds against Real Madrid.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext7.style.display = "block";
});

uclopt72.addEventListener("click", () => {
    uclopt71.style.display = "none";
    uclopt72.style.display = "none";
    uclopt73.style.display = "none";
    uclopt74.style.display = "none";
    uclans7.innerHTML = "Correct!!<br>Paolo Maldini scored after 50 seconds against Real Madrid.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext7.style.display = "block";
});

uclopt73.addEventListener("click", () => {
    uclopt71.style.display = "none";
    uclopt72.style.display = "none";
    uclopt73.style.display = "none";
    uclopt74.style.display = "none";
    uclans7.innerHTML = "Wrong!!<br>Paolo Maldini scored after 50 seconds against Real Madrid.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext7.style.display = "block";
});

uclopt74.addEventListener("click", () => {
    uclopt71.style.display = "none";
    uclopt72.style.display = "none";
    uclopt73.style.display = "none";
    uclopt74.style.display = "none";
    uclans7.innerHTML = "Wrong!!<br>Paolo Maldini scored after 50 seconds against Real Madrid.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext7.style.display = "block";
});

uclnext7.addEventListener("click", () => {
    document.getElementById("ucl7").style.display = "none";
    document.getElementById("ucl8").style.display = "block";
});

// Question 8
let uclopt81 = document.getElementById("uclopt81");
let uclopt82 = document.getElementById("uclopt82");
let uclopt83 = document.getElementById("uclopt83");
let uclopt84 = document.getElementById("uclopt84");
let uclans8 = document.getElementById("uclans8");
let uclnext8 = document.getElementById("uclnext8");

uclopt81.addEventListener("click", () => {
    uclopt81.style.display = "none";
    uclopt82.style.display = "none";
    uclopt83.style.display = "none";
    uclopt84.style.display = "none";
    uclans8.innerHTML = "Correct!!<br>Francisco Gento won 6 European Cups with Real Madrid.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext8.style.display = "block";
});

uclopt82.addEventListener("click", () => {
    uclopt81.style.display = "none";
    uclopt82.style.display = "none";
    uclopt83.style.display = "none";
    uclopt84.style.display = "none";
    uclans8.innerHTML = "Wrong!!<br>Francisco Gento won 6 European Cups with Real Madrid.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext8.style.display = "block";
});

uclopt83.addEventListener("click", () => {
    uclopt81.style.display = "none";
    uclopt82.style.display = "none";
    uclopt83.style.display = "none";
    uclopt84.style.display = "none";
    uclans8.innerHTML = "Wrong!!<br>Francisco Gento won 6 European Cups with Real Madrid.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext8.style.display = "block";
});

uclopt84.addEventListener("click", () => {
    uclopt81.style.display = "none";
    uclopt82.style.display = "none";
    uclopt83.style.display = "none";
    uclopt84.style.display = "none";
    uclans8.innerHTML = "Wrong!!<br>Francisco Gento won 6 European Cups with Real Madrid.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext8.style.display = "block";
});

uclnext8.addEventListener("click", () => {
    document.getElementById("ucl8").style.display = "none";
    document.getElementById("ucl9").style.display = "block";
});

// Question 9
let uclopt91 = document.getElementById("uclopt91");
let uclopt92 = document.getElementById("uclopt92");
let uclopt93 = document.getElementById("uclopt93");
let uclopt94 = document.getElementById("uclopt94");
let uclans9 = document.getElementById("uclans9");
let uclnext9 = document.getElementById("uclnext9");

uclopt91.addEventListener("click", () => {
    uclopt91.style.display = "none";
    uclopt92.style.display = "none";
    uclopt93.style.display = "none";
    uclopt94.style.display = "none";
    uclans9.innerHTML = "Wrong!!<br>Bayern Munich beat Sporting CP 12-1 on aggregate in 2009.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext9.style.display = "block";
});

uclopt92.addEventListener("click", () => {
    uclopt91.style.display = "none";
    uclopt92.style.display = "none";
    uclopt93.style.display = "none";
    uclopt94.style.display = "none";
    uclans9.innerHTML = "Wrong!!<br>Bayern Munich beat Sporting CP 12-1 on aggregate in 2009.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext9.style.display = "block";
});

uclopt93.addEventListener("click", () => {
    uclopt91.style.display = "none";
    uclopt92.style.display = "none";
    uclopt93.style.display = "none";
    uclopt94.style.display = "none";
    uclans9.innerHTML = "Correct!!<br>Bayern Munich beat Sporting CP 12-1 on aggregate in 2009.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext9.style.display = "block";
});

uclopt94.addEventListener("click", () => {
    uclopt91.style.display = "none";
    uclopt92.style.display = "none";
    uclopt93.style.display = "none";
    uclopt94.style.display = "none";
    uclans9.innerHTML = "Wrong!!<br>Bayern Munich beat Sporting CP 12-1 on aggregate in 2009.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext9.style.display = "block";
});

uclnext9.addEventListener("click", () => {
    document.getElementById("ucl9").style.display = "none";
    document.getElementById("ucl10").style.display = "block";
});

// Question 10
let uclopt101 = document.getElementById("uclopt101");
let uclopt102 = document.getElementById("uclopt102");
let uclopt103 = document.getElementById("uclopt103");
let uclopt104 = document.getElementById("uclopt104");
let uclans10 = document.getElementById("uclans10");
let uclnext10 = document.getElementById("uclnext10");

uclopt101.addEventListener("click", () => {
    uclopt101.style.display = "none";
    uclopt102.style.display = "none";
    uclopt103.style.display = "none";
    uclopt104.style.display = "none";
    uclans10.innerHTML = "Wrong!!<br>Peter Ofori-Quaye scored at 17 years and 195 days old.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext10.style.display = "block";
});

uclopt102.addEventListener("click", () => {
    uclopt101.style.display = "none";
    uclopt102.style.display = "none";
    uclopt103.style.display = "none";
    uclopt104.style.display = "none";
    uclans10.innerHTML = "Correct!!<br>Peter Ofori-Quaye scored at 17 years and 195 days old.";
    uclScore++;
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext10.style.display = "block";
});

uclopt103.addEventListener("click", () => {
    uclopt101.style.display = "none";
    uclopt102.style.display = "none";
    uclopt103.style.display = "none";
    uclopt104.style.display = "none";
    uclans10.innerHTML = "Wrong!!<br>Peter Ofori-Quaye scored at 17 years and 195 days old.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext10.style.display = "block";
});

uclopt104.addEventListener("click", () => {
    uclopt101.style.display = "none";
    uclopt102.style.display = "none";
    uclopt103.style.display = "none";
    uclopt104.style.display = "none";
    uclans10.innerHTML = "Wrong!!<br>Peter Ofori-Quaye scored at 17 years and 195 days old.";
    uclpoints.innerHTML = "Points: " + uclScore;
    uclnext10.style.display = "block";
});

let ucl10 = document.getElementById("ucl10")
let uclend = document.getElementById("uclend")
let uclres = document.getElementById("uclres");
let uclcom = document.getElementById("uclcom");
let uclrty = document.getElementById("uclrty");

uclnext10.addEventListener("click", () => {
    ucl10.style.display = "none";
    uclrty.style.display = "block";
    uclend.style.display = "block";
    uclres.innerHTML = "Your final score is: " + uclScore;
    if (uclScore >= 7) {
        uclcom.innerHTML = "You did incredible. The way you understand the game, it's beautiful. Like Messi in 2011.  -Pep Guardiola";
        uclcom.style.display = "block";
    }
    else if (uclScore >= 5) {
        uclcom.innerHTML = 'Decent. Not special… yet.   -Jose Mourinho';
        uclcom.style.display = "block";
    }
    else {
        uclcom.innerHTML = 'This is not football. This is comedy.   -Jose Mourinho';
        uclcom.style.display = "block";
    }
    uclrty.addEventListener("click", () => {
        window.location.reload();
    });

});









// World Cup Quiz
let wcScore = 0;
let wcpoints = document.getElementById("wcpoints");

// Question 1
let wcopt1 = document.getElementById("wcopt1");
let wcopt2 = document.getElementById("wcopt2");
let wcopt3 = document.getElementById("wcopt3");
let wcopt4 = document.getElementById("wcopt4");
let wcans = document.getElementById("wcans");
let wcnext1 = document.getElementById("wcnext1");

wcopt1.addEventListener("click", () => {
    wcopt1.style.display = "none";
    wcopt2.style.display = "none";
    wcopt3.style.display = "none";
    wcopt4.style.display = "none";
    wcans.innerHTML = "Wrong!!<br>Brazil has won 5 World Cup titles.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext1.style.display = "block";
});

wcopt2.addEventListener("click", () => {
    wcopt1.style.display = "none";
    wcopt2.style.display = "none";
    wcopt3.style.display = "none";
    wcopt4.style.display = "none";
    wcans.innerHTML = "Wrong!!<br>Brazil has won 5 World Cup titles.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext1.style.display = "block";
});

wcopt3.addEventListener("click", () => {
    wcopt1.style.display = "none";
    wcopt2.style.display = "none";
    wcopt3.style.display = "none";
    wcopt4.style.display = "none";
    wcans.innerHTML = "Correct!!<br>Brazil has won 5 World Cup titles.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext1.style.display = "block";
});

wcopt4.addEventListener("click", () => {
    wcopt1.style.display = "none";
    wcopt2.style.display = "none";
    wcopt3.style.display = "none";
    wcopt4.style.display = "none";
    wcans.innerHTML = "Wrong!!<br>Brazil has won 5 World Cup titles.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext1.style.display = "block";
});

wcnext1.addEventListener("click", () => {
    document.getElementById("wc1").style.display = "none";
    document.getElementById("wc2").style.display = "block";
});

// Question 2
let wcopt21 = document.getElementById("wcopt21");
let wcopt22 = document.getElementById("wcopt22");
let wcopt23 = document.getElementById("wcopt23");
let wcopt24 = document.getElementById("wcopt24");
let wcans2 = document.getElementById("wcans2");
let wcnext2 = document.getElementById("wcnext2");

wcopt21.addEventListener("click", () => {
    wcopt21.style.display = "none";
    wcopt22.style.display = "none";
    wcopt23.style.display = "none";
    wcopt24.style.display = "none";
    wcans2.innerHTML = "Wrong!!<br>Miroslav Klose scored 16 goals across four World Cups.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext2.style.display = "block";
});

wcopt22.addEventListener("click", () => {
    wcopt21.style.display = "none";
    wcopt22.style.display = "none";
    wcopt23.style.display = "none";
    wcopt24.style.display = "none";
    wcans2.innerHTML = "Correct!!<br>Miroslav Klose scored 16 goals across four World Cups.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext2.style.display = "block";
});

wcopt23.addEventListener("click", () => {
    wcopt21.style.display = "none";
    wcopt22.style.display = "none";
    wcopt23.style.display = "none";
    wcopt24.style.display = "none";
    wcans2.innerHTML = "Wrong!!<br>Miroslav Klose scored 16 goals across four World Cups.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext2.style.display = "block";
});

wcopt24.addEventListener("click", () => {
    wcopt21.style.display = "none";
    wcopt22.style.display = "none";
    wcopt23.style.display = "none";
    wcopt24.style.display = "none";
    wcans2.innerHTML = "Wrong!!<br>Miroslav Klose scored 16 goals across four World Cups.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext2.style.display = "block";
});

wcnext2.addEventListener("click", () => {
    document.getElementById("wc2").style.display = "none";
    document.getElementById("wc3").style.display = "block";
});

// Question 3
let wcopt31 = document.getElementById("wcopt31");
let wcopt32 = document.getElementById("wcopt32");
let wcopt33 = document.getElementById("wcopt33");
let wcopt34 = document.getElementById("wcopt34");
let wcans3 = document.getElementById("wcans3");
let wcnext3 = document.getElementById("wcnext3");

wcopt31.addEventListener("click", () => {
    wcopt31.style.display = "none";
    wcopt32.style.display = "none";
    wcopt33.style.display = "none";
    wcopt34.style.display = "none";
    wcans3.innerHTML = "Wrong!!<br>Uruguay hosted and won the first World Cup in 1930.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext3.style.display = "block";
});

wcopt32.addEventListener("click", () => {
    wcopt31.style.display = "none";
    wcopt32.style.display = "none";
    wcopt33.style.display = "none";
    wcopt34.style.display = "none";
    wcans3.innerHTML = "Correct!!<br>Uruguay hosted and won the first World Cup in 1930.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext3.style.display = "block";
});

wcopt33.addEventListener("click", () => {
    wcopt31.style.display = "none";
    wcopt32.style.display = "none";
    wcopt33.style.display = "none";
    wcopt34.style.display = "none";
    wcans3.innerHTML = "Wrong!!<br>Uruguay hosted and won the first World Cup in 1930.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext3.style.display = "block";
});

wcopt34.addEventListener("click", () => {
    wcopt31.style.display = "none";
    wcopt32.style.display = "none";
    wcopt33.style.display = "none";
    wcopt34.style.display = "none";
    wcans3.innerHTML = "Wrong!!<br>Uruguay hosted and won the first World Cup in 1930.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext3.style.display = "block";
});

wcnext3.addEventListener("click", () => {
    document.getElementById("wc3").style.display = "none";
    document.getElementById("wc4").style.display = "block";
});

// Question 4
let wcopt41 = document.getElementById("wcopt41");
let wcopt42 = document.getElementById("wcopt42");
let wcopt43 = document.getElementById("wcopt43");
let wcopt44 = document.getElementById("wcopt44");
let wcans4 = document.getElementById("wcans4");
let wcnext4 = document.getElementById("wcnext4");

wcopt41.addEventListener("click", () => {
    wcopt41.style.display = "none";
    wcopt42.style.display = "none";
    wcopt43.style.display = "none";
    wcopt44.style.display = "none";
    wcans4.innerHTML = "Wrong!!<br>Just Fontaine scored 13 goals in the 1958 World Cup.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext4.style.display = "block";
});

wcopt42.addEventListener("click", () => {
    wcopt41.style.display = "none";
    wcopt42.style.display = "none";
    wcopt43.style.display = "none";
    wcopt44.style.display = "none";
    wcans4.innerHTML = "Correct!!<br>Just Fontaine scored 13 goals in the 1958 World Cup.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext4.style.display = "block";
});

wcopt43.addEventListener("click", () => {
    wcopt41.style.display = "none";
    wcopt42.style.display = "none";
    wcopt43.style.display = "none";
    wcopt44.style.display = "none";
    wcans4.innerHTML = "Wrong!!<br>Just Fontaine scored 13 goals in the 1958 World Cup.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext4.style.display = "block";
});

wcopt44.addEventListener("click", () => {
    wcopt41.style.display = "none";
    wcopt42.style.display = "none";
    wcopt43.style.display = "none";
    wcopt44.style.display = "none";
    wcans4.innerHTML = "Wrong!!<br>Just Fontaine scored 13 goals in the 1958 World Cup.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext4.style.display = "block";
});

wcnext4.addEventListener("click", () => {
    document.getElementById("wc4").style.display = "none";
    document.getElementById("wc5").style.display = "block";
});

// Question 5
let wcopt51 = document.getElementById("wcopt51");
let wcopt52 = document.getElementById("wcopt52");
let wcopt53 = document.getElementById("wcopt53");
let wcopt54 = document.getElementById("wcopt54");
let wcans5 = document.getElementById("wcans5");
let wcnext5 = document.getElementById("wcnext5");

wcopt51.addEventListener("click", () => {
    wcopt51.style.display = "none";
    wcopt52.style.display = "none";
    wcopt53.style.display = "none";
    wcopt54.style.display = "none";
    wcans5.innerHTML = "Wrong!!<br>Lothar Matthäus played in 5 World Cups from 1982 to 1998.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext5.style.display = "block";
});

wcopt52.addEventListener("click", () => {
    wcopt51.style.display = "none";
    wcopt52.style.display = "none";
    wcopt53.style.display = "none";
    wcopt54.style.display = "none";
    wcans5.innerHTML = "Correct!!<br>Lothar Matthäus played in 5 World Cups from 1982 to 1998.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext5.style.display = "block";
});

wcopt53.addEventListener("click", () => {
    wcopt51.style.display = "none";
    wcopt52.style.display = "none";
    wcopt53.style.display = "none";
    wcopt54.style.display = "none";
    wcans5.innerHTML = "Wrong!!<br>Lothar Matthäus played in 5 World Cups from 1982 to 1998.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext5.style.display = "block";
});

wcopt54.addEventListener("click", () => {
    wcopt51.style.display = "none";
    wcopt52.style.display = "none";
    wcopt53.style.display = "none";
    wcopt54.style.display = "none";
    wcans5.innerHTML = "Wrong!!<br>Lothar Matthäus played in 5 World Cups from 1982 to 1998.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext5.style.display = "block";
});

wcnext5.addEventListener("click", () => {
    document.getElementById("wc5").style.display = "none";
    document.getElementById("wc6").style.display = "block";
});

// Question 6
let wcopt61 = document.getElementById("wcopt61");
let wcopt62 = document.getElementById("wcopt62");
let wcopt63 = document.getElementById("wcopt63");
let wcopt64 = document.getElementById("wcopt64");
let wcans6 = document.getElementById("wcans6");
let wcnext6 = document.getElementById("wcnext6");

wcopt61.addEventListener("click", () => {
    wcopt61.style.display = "none";
    wcopt62.style.display = "none";
    wcopt63.style.display = "none";
    wcopt64.style.display = "none";
    wcans6.innerHTML = "Wrong!!<br>Hungary scored 27 goals in the 1954 World Cup.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext6.style.display = "block";
});

wcopt62.addEventListener("click", () => {
    wcopt61.style.display = "none";
    wcopt62.style.display = "none";
    wcopt63.style.display = "none";
    wcopt64.style.display = "none";
    wcans6.innerHTML = "Correct!!<br>Hungary scored 27 goals in the 1954 World Cup.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext6.style.display = "block";
});

wcopt63.addEventListener("click", () => {
    wcopt61.style.display = "none";
    wcopt62.style.display = "none";
    wcopt63.style.display = "none";
    wcopt64.style.display = "none";
    wcans6.innerHTML = "Wrong!!<br>Hungary scored 27 goals in the 1954 World Cup.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext6.style.display = "block";
});

wcopt64.addEventListener("click", () => {
    wcopt61.style.display = "none";
    wcopt62.style.display = "none";
    wcopt63.style.display = "none";
    wcopt64.style.display = "none";
    wcans6.innerHTML = "Wrong!!<br>Hungary scored 27 goals in the 1954 World Cup.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext6.style.display = "block";
});

wcnext6.addEventListener("click", () => {
    document.getElementById("wc6").style.display = "none";
    document.getElementById("wc7").style.display = "block";
});

// Question 7
let wcopt71 = document.getElementById("wcopt71");
let wcopt72 = document.getElementById("wcopt72");
let wcopt73 = document.getElementById("wcopt73");
let wcopt74 = document.getElementById("wcopt74");
let wcans7 = document.getElementById("wcans7");
let wcnext7 = document.getElementById("wcnext7");

wcopt71.addEventListener("click", () => {
    wcopt71.style.display = "none";
    wcopt72.style.display = "none";
    wcopt73.style.display = "none";
    wcopt74.style.display = "none";
    wcans7.innerHTML = "Wrong!!<br>Oleg Salenko scored 5 goals against Cameroon in 1994.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext7.style.display = "block";
});

wcopt72.addEventListener("click", () => {
    wcopt71.style.display = "none";
    wcopt72.style.display = "none";
    wcopt73.style.display = "none";
    wcopt74.style.display = "none";
    wcans7.innerHTML = "Correct!!<br>Oleg Salenko scored 5 goals against Cameroon in 1994.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext7.style.display = "block";
});

wcopt73.addEventListener("click", () => {
    wcopt71.style.display = "none";
    wcopt72.style.display = "none";
    wcopt73.style.display = "none";
    wcopt74.style.display = "none";
    wcans7.innerHTML = "Wrong!!<br>Oleg Salenko scored 5 goals against Cameroon in 1994.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext7.style.display = "block";
});

wcopt74.addEventListener("click", () => {
    wcopt71.style.display = "none";
    wcopt72.style.display = "none";
    wcopt73.style.display = "none";
    wcopt74.style.display = "none";
    wcans7.innerHTML = "Wrong!!<br>Oleg Salenko scored 5 goals against Cameroon in 1994.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext7.style.display = "block";
});

wcnext7.addEventListener("click", () => {
    document.getElementById("wc7").style.display = "none";
    document.getElementById("wc8").style.display = "block";
});

// Question 8
let wcopt81 = document.getElementById("wcopt81");
let wcopt82 = document.getElementById("wcopt82");
let wcopt83 = document.getElementById("wcopt83");
let wcopt84 = document.getElementById("wcopt84");
let wcans8 = document.getElementById("wcans8");
let wcnext8 = document.getElementById("wcnext8");

wcopt81.addEventListener("click", () => {
    wcopt81.style.display = "none";
    wcopt82.style.display = "none";
    wcopt83.style.display = "none";
    wcopt84.style.display = "none";
    wcans8.innerHTML = "Wrong!!<br>Norman Whiteside was 17 years and 41 days old.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext8.style.display = "block";
});

wcopt82.addEventListener("click", () => {
    wcopt81.style.display = "none";
    wcopt82.style.display = "none";
    wcopt83.style.display = "none";
    wcopt84.style.display = "none";
    wcans8.innerHTML = "Correct!!<br>Norman Whiteside was 17 years and 41 days old.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext8.style.display = "block";
});

wcopt83.addEventListener("click", () => {
    wcopt81.style.display = "none";
    wcopt82.style.display = "none";
    wcopt83.style.display = "none";
    wcopt84.style.display = "none";
    wcans8.innerHTML = "Wrong!!<br>Norman Whiteside was 17 years and 41 days old.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext8.style.display = "block";
});

wcopt84.addEventListener("click", () => {
    wcopt81.style.display = "none";
    wcopt82.style.display = "none";
    wcopt83.style.display = "none";
    wcopt84.style.display = "none";
    wcans8.innerHTML = "Wrong!!<br>Norman Whiteside was 17 years and 41 days old.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext8.style.display = "block";
});

wcnext8.addEventListener("click", () => {
    document.getElementById("wc8").style.display = "none";
    document.getElementById("wc9").style.display = "block";
});

// Question 9
let wcopt91 = document.getElementById("wcopt91");
let wcopt92 = document.getElementById("wcopt92");
let wcopt93 = document.getElementById("wcopt93");
let wcopt94 = document.getElementById("wcopt94");
let wcans9 = document.getElementById("wcans9");
let wcnext9 = document.getElementById("wcnext9");

wcopt91.addEventListener("click", () => {
    wcopt91.style.display = "none";
    wcopt92.style.display = "none";
    wcopt93.style.display = "none";
    wcopt94.style.display = "none";
    wcans9.innerHTML = "Wrong!!<br>Roger Milla scored at 42 years and 39 days old.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext9.style.display = "block";
});

wcopt92.addEventListener("click", () => {
    wcopt91.style.display = "none";
    wcopt92.style.display = "none";
    wcopt93.style.display = "none";
    wcopt94.style.display = "none";
    wcans9.innerHTML = "Correct!!<br>Roger Milla scored at 42 years and 39 days old.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext9.style.display = "block";
});

wcopt93.addEventListener("click", () => {
    wcopt91.style.display = "none";
    wcopt92.style.display = "none";
    wcopt93.style.display = "none";
    wcopt94.style.display = "none";
    wcans9.innerHTML = "Wrong!!<br>Roger Milla scored at 42 years and 39 days old.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext9.style.display = "block";
});

wcopt94.addEventListener("click", () => {
    wcopt91.style.display = "none";
    wcopt92.style.display = "none";
    wcopt93.style.display = "none";
    wcopt94.style.display = "none";
    wcans9.innerHTML = "Wrong!!<br>Roger Milla scored at 42 years and 39 days old.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext9.style.display = "block";
});

wcnext9.addEventListener("click", () => {
    document.getElementById("wc9").style.display = "none";
    document.getElementById("wc10").style.display = "block";
});

// Question 10
let wcopt101 = document.getElementById("wcopt101");
let wcopt102 = document.getElementById("wcopt102");
let wcopt103 = document.getElementById("wcopt103");
let wcopt104 = document.getElementById("wcopt104");
let wcans10 = document.getElementById("wcans10");
let wcnext10 = document.getElementById("wcnext10");

wcopt101.addEventListener("click", () => {
    wcopt101.style.display = "none";
    wcopt102.style.display = "none";
    wcopt103.style.display = "none";
    wcopt104.style.display = "none";
    wcans10.innerHTML = "Wrong!!<br>Pelé won the World Cup in 1958, 1962, and 1970.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext10.style.display = "block";
});

wcopt102.addEventListener("click", () => {
    wcopt101.style.display = "none";
    wcopt102.style.display = "none";
    wcopt103.style.display = "none";
    wcopt104.style.display = "none";
    wcans10.innerHTML = "Wrong!!<br>Pelé won the World Cup in 1958, 1962, and 1970.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext10.style.display = "block";
});

wcopt103.addEventListener("click", () => {
    wcopt101.style.display = "none";
    wcopt102.style.display = "none";
    wcopt103.style.display = "none";
    wcopt104.style.display = "none";
    wcans10.innerHTML = "Correct!!<br>Pelé won the World Cup in 1958, 1962, and 1970.";
    wcScore++;
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext10.style.display = "block";
});

wcopt104.addEventListener("click", () => {
    wcopt101.style.display = "none";
    wcopt102.style.display = "none";
    wcopt103.style.display = "none";
    wcopt104.style.display = "none";
    wcans10.innerHTML = "Wrong!!<br>Pelé won the World Cup in 1958, 1962, and 1970.";
    wcpoints.innerHTML = "Points: " + wcScore;
    wcnext10.style.display = "block";
});




let wc10 = document.getElementById("wc10")
let wcend = document.getElementById("wcend")
let wcres = document.getElementById("wcres");
let wccom = document.getElementById("wccom");
let wcrty = document.getElementById("wcrty");

wcnext10.addEventListener("click", () => {
    wc10.style.display = "none";
    wcrty.style.display = "block";
    wcend.style.display = "block";
    wcres.innerHTML =" Your final score is: " + wcScore;
    if (wcScore >= 7) {
        wccom.innerHTML = "You did incredible. The way you understand the game, it's beautiful. Like Messi in 2011.  -Pep Guardiola";
        wccom.style.display = "block";
    }
    else if (wcScore >= 5) {
        wccom.innerHTML = 'Decent. Not special… yet.   -Jose Mourinho';
        wccom.style.display = "block";
    }
    else {
        wccom.innerHTML = 'This is not football. This is comedy.   -Jose Mourinho';
        wccom.style.display = "block";
    }
    wcrty.addEventListener("click", () => {
        window.location.reload();
    });
});






