import React, {Component} from 'react';



class coverPhoto extends Component {
    render() {
        return (
            <div>
                 {{ imgUrl: './public/assets/images/coverPhoto.jpg'}}
                styles = {{ backgroundImage: `url ${imgUrl}`,
                            backgroundSize: `cover`,
                            backgroundPosition: `cente rcenter`,
                            backgroundRepeat: `no-repeat`,
            
            }}

              
               
            </div>

        )
    }
}

export default coverPhoto;