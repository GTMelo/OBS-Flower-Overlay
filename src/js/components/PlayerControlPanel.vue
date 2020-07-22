<template>
    <div :id="playerPrefix() + '-container'">
        <div v-for="i in 5" :id="charPrefix(i)" class="flex items-center flex-wrap">

            <div class="mr-2">Char {{i}}: </div>

            <div :id="charPrefix(i)+ '-selector'" class="flex mb-1">
                <div v-for="item in options" class="flex mr-1">
                    <label :for="charPrefix(i) + '-selector-input-' + item.code" @click="emitCharacterChangeEvent(i, options[item.code])">
                        <input type="radio" :name="charPrefix(i)+'-selector-input'" :id="charPrefix(i)+'-selector-input-' + item.code" :value="item.code" class="appearance-none">
                        <img :src="'assets/images/' + item.image" style="width: 40px; height: 40px">
                    </label>
                </div>
            </div>

            <div :id="charPrefix(i) + '-status'" class="flex">
                <div class="mr-2">
                    <label>
                        <input type="radio" :name="charPrefix(i) + '-status'" :id="charPrefix(i) + '-status'" value="waiting">
                        Waiting
                    </label>
                </div>
                <div class="mr-2">
                    <label>
                        <input type="radio" :name="charPrefix(i) + '-status'" :id="charPrefix(i) + '-status'" value="win">
                        Won
                    </label>
                </div>
                <div class="mr-2">
                    <label>
                        <input type="radio" :name="charPrefix(i) + '-status'" :id="charPrefix(i) + '-status'" value="lost">
                        Lost
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../javascript";

    export default {
        name: "PlayerControlPanel",
        data() {
            return {
                team: {
                    1: {code: "disabled", displayName: "Disabled", image: "center-helper.png"},
                    2: {code: "disabled", displayName: "Disabled", image: "center-helper.png"},
                    3: {code: "disabled", displayName: "Disabled", image: "center-helper.png"},
                    4: {code: "disabled", displayName: "Disabled", image: "center-helper.png"},
                    5: {code: "disabled", displayName: "Disabled", image: "center-helper.png"},
                },
                testModel: 'something'
            }
        },
        props: ['options', 'player'],
        methods: {
            playerPrefix: function () {
                return 'p' + this.player;
            },
            charPrefix: function (i) {
                return this.playerPrefix() + '-char' + i;
            },
            emitCharacterChangeEvent: function(charNo, char){
                EventBus.$emit('changedchar', {
                    player: this.player,
                    charNo: charNo,
                    char: char
                })
            }

        }

    }
</script>

<style scoped>
    [type=radio] + img {
        cursor: pointer;
    }

    [type=radio]:checked + img {
        outline: 2px solid blue;
    }
</style>