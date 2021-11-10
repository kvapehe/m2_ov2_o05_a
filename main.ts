input.onButtonPressed(Button.A, function () {
    teller01 = teller01 + 1
    teller01 = teller01 % roter_rull_teller
    basic.showNumber(teller01)
})
input.onButtonPressed(Button.AB, function () {
    ct = 0
    len_telletxt = telletekst.length
    tallet = parseFloat(telletekst)
    ct = 0
    sumtall = 0
    basic.showString("L" + ("" + convertToText(len_telletxt) + ""))
    // NB, lar være å vise tallet pga scrolling, men det kan også gjøres. 
    // Vising til skjerm går også utover "sekund" tics
    for (let index = 0; index < len_telletxt; index++) {
        tallsifferplass = telletekst.charAt(ct)
        ct += 1
        sumtall = sumtall + parseFloat(tallsifferplass)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        // Legger inn indikasjon, noe skjer.
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(sumtall)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    // Nå kommer svaret.
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Tall " + ("" + telletekst + " Sum:"))
    basic.showNumber(sumtall)
    // Resten henger igjen fra tidligere, og gir en lyd når beregning er over.. Til slutt vises summen på nytt.
    // Alt under kan slettes.
    music.playMelody("C E C D D C C C5 ", 120)
    music.rest(music.beat(BeatFraction.Breve))
    music.playTone(165, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    if (ct % 1 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        basic.showIcon(IconNames.Diamond)
    }
    // Kan slettes, ikke lenger i bruk
    ct += 1
    basic.showNumber(sumtall)
})
input.onButtonPressed(Button.B, function () {
    telletekst = "" + telletekst + convertToText(teller01)
    basic.showNumber(teller01)
    basic.showString("T ")
    basic.showString("" + telletekst + "")
    teller01 = 0
    basic.showNumber(teller01)
})
input.onGesture(Gesture.Shake, function () {
    telletekst = ""
    teller01 = 0
    randomtall = randint(mintall, makstall)
    telletekst = convertToText(randomtall)
    len_telletxt = telletekst.length
    basic.showString("L" + ("" + convertToText(len_telletxt) + ""))
    basic.showLeds(`
        . . . . .
        # # # . #
        # . # # .
        # # # . #
        . . . . .
        `)
})
/**
 * Ble lei av å legge inn tall i A og B funksjonene.
 * 
 * Lagde en Shake funksjon som genererer et tall mellom 0 og 9 999 999 (7 siffer).
 * 
 * Tallet vises som tekst i A+B, deretter vises summen mens tallet øker og til slutt
 * 
 * er alle siffer lagt sammen.
 * 
 * Det er nok et par tre andre metoder som kan løse denne oppgaven, men ideen var å la en variabel ta mot ny verdi hele tiden, og la input bli et tall-tegn Slik at tallet bla. kan skrives med ledende 0-er.
 * 
 * Funksjon, bruk Shake så A+B for å teste summeringsfunksjonen.
 * 
 * Legg inn et og et siffer med A og "lagre" med med B, deretter trykk A+B
 * 
 * NB. Det er ingenting som nullstiller tallet som vises
 * 
 * Shake vil gerere et nytt. Funksjonen A+B kunne nullstilt tallet, men litt kjedelig om en vil se beregningen to ganger. Med Mbit2 så kan en trykke på logo for nullstilling, og en del andre måter. Det ble ikke gjort i denne oppgaven.
 */
let randomtall = 0
let tallsifferplass = ""
let sumtall = 0
let tallet = 0
let len_telletxt = 0
let ct = 0
let roter_rull_teller = 0
let teller01 = 0
let telletekst = ""
let makstall = 0
let mintall = 0
mintall = 0
makstall = 1000000
telletekst = "Rist starter. A legger inn tall. B neste siffer A+B beregner."
teller01 = 0
roter_rull_teller = 10
// Plasser under show om en vil se info-melding
telletekst = ""
basic.showString(telletekst)
basic.forever(function () {
	
})
