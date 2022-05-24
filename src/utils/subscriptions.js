// HTTP SUBSCRIPTIONS

import axios from "axios";
import {API_ENDPOINT} from "./constants";

/**
 * @name Subscriptions
 * @type class
 * @class
 */
class Subscriptions{
    /**
     * @name getData
     * @static
     * @desc Consume base data
     * @params
     */
    static getData () {
        return axios.get(API_ENDPOINT)
    }
}

export default Subscriptions;