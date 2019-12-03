import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import "./About.css";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 20,
    min: 15
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
class About extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="about">
        <h2>ABOUT</h2>
        <p>{lorem.generateParagraphs(1)}</p>
        <h2>OUR STORY</h2>
        <p>{lorem.generateParagraphs(1)}</p>
      </div>
    );
  }
}

export default About;
