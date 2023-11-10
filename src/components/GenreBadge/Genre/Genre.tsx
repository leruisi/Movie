import React, {FC} from 'react';

import {IGenre} from "../../../interface/GenreInterface";
interface IProps{
    genre:IGenre

}

const Genre: FC<IProps> = ({genre}) => {
    const{id,name
    } = genre
    return (
        <div >{id}
            {name}
        </div>
    );
};

export {Genre};