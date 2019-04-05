import React, { Component } from 'react';


class StickersScreen extends Component{
state={
    stickers: null
};

componentDidMount() {
    fetch(`http://${process.env.REACT_APP_SERVER_IP}:8888/api/stickers`).then(res => {
        // console.log(res);
        return res.json();
        // this.setState({stickers: res.json()});
    }).then(json => this.setState({stickers: json}))
}

render() {
    const {stickers} = this.state;
    return(<div className={'sticker-list'}>
        {stickers && stickers.length && stickers.map(sticker =>
            <div className={'sticker-block'} key={sticker.stickerId}>
                <img className={'sticker-image'} src={`http://${process.env.REACT_APP_SERVER_IP}:8888${sticker.filePath}`} />
                {sticker.searchWords.map(word => <div>{word.text}</div>)}
            </div>
        )}
    </div>)
}

}

export default StickersScreen