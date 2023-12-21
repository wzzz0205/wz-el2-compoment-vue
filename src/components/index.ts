import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import {App} from "vue";

const components = [
    chooseIcon,
    chooseArea
]

export default {
    install(app:App){
        components.map(c => app.use(c))
    }
}