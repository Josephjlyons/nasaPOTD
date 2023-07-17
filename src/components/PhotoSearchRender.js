
import React from 'react';



const PhotoSearchRender = (props) => {
    console.log(props)
    return (
        <>
            {Object.entries(props.photoProps).map(([key, photoProps], i) => {
                return (
                    <div>
               
                            <div className='potdCollection' key={[i]}>
                           <div className='potdCollection__imgContainer'>
                                {photoProps.media_type === 'image' ? (
                                    <img
                                        src={photoProps.url}
                                        alt={photoProps.title}
                                        className='potdCollection__photo'></img>
                                ) : (
                                    <iframe
                                        className='potdCollection__photo'
                                        title='space video'
                                        src={photoProps.url}

                                        allow='encrypted-media'
                                        allowFullScreen
                                    />
                                )}
                                </div>
                                <div className='potdCollection__details'>
                                    <h1 className='potdCollection__details--title'>{photoProps.title}</h1>
                                    <p className='potdCollection__details--date'>{photoProps.date}</p>
                                    <p className='potdCollection__details--explanation'>{photoProps.explanation}</p>
                                </div>
                 
                        </div>

                    </div>
                )
              

            })}

   
        </>

    );
}

export default PhotoSearchRender;