/**
 * Created by Roy on 6/9/2017.
 */
import {Collection} from 'backbone';
import Photo from '../models/Photo';

/**
 * Collection for the photos endpoint
 *
 * @constructor
 */
let Photos = Collection.extend({
    model: Photo,
    url: 'https://stud.hosted.hr.nl/0843154/Jaar3/FED/proxy.php?url=' + encodeURIComponent('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=W1c7yjDXpGaAEwM23FXHxgDmvEvKrKdTEAdGVzXt'),

    parse: function(response, options){
        console.log(response);
        return response.photos;
    },

    /**
     * Method for setting up the correct Url before fetching the collection using a proxy.
     *
     * @param rover
     * @param sol
     * @param camera
     */
    loadPhotosFromRover(rover, sol, camera = null){
        console.log(rover + sol + camera);
        if(camera == null){
            this.url = 'https://stud.hosted.hr.nl/0843154/Jaar3/FED/proxy.php?url=' + encodeURIComponent('https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=' + sol + '&page=0&api_key=W1c7yjDXpGaAEwM23FXHxgDmvEvKrKdTEAdGVzXt');
        }
        else {
            this.url = 'https://stud.hosted.hr.nl/0843154/Jaar3/FED/proxy.php?url=' + encodeURIComponent('https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=' + sol + '&camera=' + camera + '&page=0&api_key=W1c7yjDXpGaAEwM23FXHxgDmvEvKrKdTEAdGVzXt');
        }
    }
});

export default Photos;
