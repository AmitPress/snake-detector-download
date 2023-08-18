import './Body.css'
import { useContext } from 'react'
import { ButtonContext } from './ButtonContext'
import ReactMarkdown from 'react-markdown'

export const Body = () => {
    const {active} = useContext(ButtonContext)
    return (<>
    <div className="body">
        {active == 0 && <>
            <div className="app-wrapper">
                <center>
                    <ReactMarkdown>
                        # Let's Detect Some Snakes
                    </ReactMarkdown>
                </center>
                <div style={{margin: "0 5vw", textAlign: "justify"}}>
                Bangladesh being a riverine country and having acute rain in the monsoon, snakes find a very friendly environment for breeding. Thus, Snakes are a very common reptile seen almost everywhere in the country. Due to climate change and human activities, snakes are being threatened by habitat degradation. Snakes are now displaced because of both illegal smuggling and climate change. Many venomous and non-venomous snake breeds are broken into the human habitat. Hence, accidental encounters between human and snake often lead to mutual casualties. Snakes are hard to be detected with a naked eye view. Hence, often they are misunderstood to be dangerous to life and killed immediately. This causes huge damage to our ecosystem. Many non-venomous snakes are responsible for controlling harmful small animals who destroy crops. Again, some people misunderstood and identified venomous snakes to be non-venomous. This way they undermine the snakebite which leads to fatal injuries and sometimes death. In this paper we are driving deep into the problem of identification of snakes. We are determined to make the identification problem more approachable. Machines can do pattern recognition very easily and we are here trying to leverage that fact and come up with an effective solution that deep down works with the latest scientific advancements. For this type of object detection problem, we have decided to use the best available State-Of-The-Art machine learning algorithm. This way, with the correct identification of the snake breed, we can demystify the nature of the particular breed so that human can interact with the breeds accordingly. Our ambition is to lessen the casualties caused by accidental human-snake encounters with an effective AI based smart application that can warn and educate the human about different snake breeds.
                </div>
            </div>
        </>}
        {active == 1 && <>
            <div className="downloads-wrapper">
            <ReactMarkdown>
                # Download Now!
            </ReactMarkdown>
            <a href="https://drive.google.com/file/d/1KWrsN7YExCCXS1eEUiwRoDwi3uRB5dTw/view?usp=drive_link">Click Here</a>
            </div>
        </>}
        {active == 2 && <>
            <div className="reviews-wrapper">😛</div>
        </>}
    </div>
    </>)
}