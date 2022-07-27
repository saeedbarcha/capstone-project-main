import React from "react";
import Faq from "react-faq-component";
import "./FAQs.css";

const data = {
  title: "FAQs about Mentor Match",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilln",
      content: "Curabitur laoreet, mauris vel blandit fringilla,",
    },
  ],
};

const styles = {
  bgColor: " #040C18",
  titleTextColor: "white",
  titleText: "center",
  rowTitleColor: "white",
};

export default function Faqs() {
  return (
    <div className="faq">
      <Faq data={data} styles={styles} />
    </div>
  );
}
