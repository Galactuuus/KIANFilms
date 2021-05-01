import cookies from 'js-cookies';


export const fetchByGenre = (genre, limit) => {
    return async (dispatch) => {
        
        let token = cookies.getItem('auth');
        try {
            let res = await fetch(`http://localhost:4000/movie/genre?genre=${genre}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    auth: token
                }
            });

            res = await res.json();

            switch (genre) {
                case ('action'):
                    dispatch(
                        {
                            type: 'SET_ACTION_MOVIES',
                            payload: res
                        }
                    );
                    break;
                case ('thriller'):
                    dispatch(
                        {
                            type: 'SET_THRILLER_MOVIES',
                            payload: res
                        }
                    );
                    break;
                case ('animation'):
                    dispatch(
                        {
                            type: 'SET_ANIMATION_MOVIES',
                            payload: res
                        }
                    );
                    break;
                case ('romance'):
                    dispatch(
                        {
                            type: 'SET_ROMANCE_MOVIES',
                            payload: res
                        }
                    );
                    break;
                case ('horror'):
                    dispatch(
                        {
                            type: 'SET_HORROR_MOVIES',
                            payload: res
                        }
                    );
                    break;
                case ('sci-fi'):
                    dispatch(
                        {
                            type: 'SET_SCIFI_MOVIES',
                            payload: res
                        }
                    );
                    break;
                case ('crime'):
                    dispatch(
                        {
                            type: 'SET_CRIME_MOVIES',
                            payload: res
                        }
                    );
                    break;
            }

        } catch (error) {
            console.log(error);
        }
    }
}