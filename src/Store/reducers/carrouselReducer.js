const carrouselInitialState = {
    actionMovies: [],
    thrillerMovies: [],
    animationMovies: [],
    romanceMovies: [],
    horrorMovies: [],
    sciFiMovies: [],
    crimeMovies: []
};

const carrouselReducer = (carrouselState = carrouselInitialState, action) => {

    switch (action.type) {
        case 'SET_ACTION_MOVIES':
            return (
                {
                    ...carrouselState,
                    actionMovies: carrouselState.actionMovies.concat(action.payload)
                }
            );
        case 'SET_THRILLER_MOVIES':
            return (
                {
                    ...carrouselState,
                    thrillerMovies: carrouselState.thrillerMovies.concat(action.payload)
                }
            );
        case 'SET_ANIMATION_MOVIES':
            return (
                {
                    ...carrouselState,
                    animationMovies: carrouselState.animationMovies.concat(action.payload)
                }
            );
        case 'SET_ROMANCE_MOVIES':
            return (
                {
                    ...carrouselState,
                    romanceMovies: carrouselState.romanceMovies.concat(action.payload)
                }
            );
        case 'SET_HORROR_MOVIES':
            return (
                {
                    ...carrouselState,
                    horrorMovies: carrouselState.horrorMovies.concat(action.payload)
                }
            );
        case 'SET_SCIFI_MOVIES':
            return (
                {
                    ...carrouselState,
                    sciFiMovies: carrouselState.sciFiMovies.concat(action.payload)
                }
            );
        case 'SET_CRIME_MOVIES':
            return (
                {
                    ...carrouselState,
                    crimeMovies: carrouselState.crimeMovies.concat(action.payload)
                }
            );
        case 'RESET_CARROUSEL':
            return (
                {
                    actionMovies: [],
                    thrillerMovies: [],
                    animationMovies: [],
                    romanceMovies: [],
                    horrorMovies: [],
                    sciFiMovies: [],
                    crimeMovies: []
                }
            );
        default:
            return carrouselState;
    }
}

export default carrouselReducer;