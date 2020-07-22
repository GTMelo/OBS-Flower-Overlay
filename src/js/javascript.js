import Vue from 'vue';
import TeamFlower from "./components/TeamFlower";
import PlayerControlPanel from "./components/PlayerControlPanel";

export const EventBus = new Vue();

var app = new Vue({
    el: '#app',
    components: { PlayerControlPanel, TeamFlower },
    data: {
        characterList: {
            disabled: {code: "disabled", displayName: "Disabled", image: "disabled.png"},
            grave: {code: "grave", displayName: "Grave", image: "grave.png"},
            jaina: {code: "jaina", displayName: "Jaina", image: "jaina.png"},
            geiger: {code: "geiger", displayName: "Geiger", image: "geiger.png"},
            argadarg: {code: "argadarg", displayName: "Argadarg", image: "argadarg.png"},
            setsuki: {code: "setsuki", displayName: "Setsuki", image: "setsuki.png"},
            valerie: {code: "valerie", displayName: "Valerie", image: "valerie.png"},
            rook: {code: "rook", displayName: "Rook", image: "rook.png"},
            midori: {code: "midori", displayName: "Midori", image: "midori.png"},
            lum: {code: "lum", displayName: "Lum", image: "lum.png"},
            degrey: {code: "degrey", displayName: "DeGrey", image: "degrey.png"},
            quince: {code: "quince", displayName: "Quince", image: "quince.png"},
            onimaru: {code: "onimaru", displayName: "Onimaru", image: "onimaru.png"},
        }
    }
});