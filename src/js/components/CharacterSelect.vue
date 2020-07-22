<template>
    <div :id=""></div>
<!--    <div :id="'char-' + charIndex" class="flex align-middle">-->
<!--        <span class="pr-2 my-auto">char {{charIndex}}: </span>-->
<!--        <div v-for="(char, index) in this.options" class="flex pr-2">-->
<!--            <input :name="'char-' + charIndex + '-radio'" type="radio" :value="char.code">-->
<!--            <label :for="'char-' + charIndex + '-radio'">-->
<!--                <img :src="'assets/images/' + char.image" style="width: 50px; height: 50px" alt="Some text here">-->
<!--            </label>-->
<!--        </div>-->
<!--        <div>-->
<!--            <input :name="'char-' + charIndex + '-status'" type="radio" value="standby">-->
<!--            <label :for="'char-' + charIndex + '-status'">Standing by</label>-->
<!--            <input :name="'char-' + charIndex + '-status'" type="radio" value="win">-->
<!--            <label :for="'char-' + charIndex + '-status'">Won</label>-->
<!--            <input :name="'char-' + charIndex + '-status'" type="radio" value="lose">-->
<!--            <label :for="'char-' + charIndex + '-status'">Lost</label>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "CharacterSelect",
        props: ['charIndex', 'options'],
        data() {
            return {
                currentTeam: {
                    1: this.options.disabled,
                    2: this.options.disabled,
                    3: this.options.disabled,
                    4: this.options.disabled,
                    5: this.options.disabled,
                }

            }
        },
        methods: {
            setChar: function(charIndex, char){
                this.currentTeam[charIndex] = char;
            },
            getChar: function (code) {
                return this.options[code];
            }
        }
    }
</script>