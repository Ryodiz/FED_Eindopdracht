/**
 * Created by Roy on 6/9/2017.
 */
import {Collection} from 'backbone';
import Rover from '../models/Rover';

/**
 * Collection for the rovers endpoint through a proxy
 *
 * @constructor
 */
let Rovers = Collection.extend({
    model: Rover,
    url: 'https://stud.hosted.hr.nl/0843154/Jaar3/FED/proxy.php?url=' + encodeURIComponent('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=W1c7yjDXpGaAEwM23FXHxgDmvEvKrKdTEAdGVzXt'),

    parse: function(response, options){
        return response.rovers;
    },

});

export default Rovers;
