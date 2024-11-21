import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-bootstrap";

export default function mention() {
  return (
    <div className="Mention">
      <h1>Mentions légales</h1>
      <div id="accordeon">
        <Accordion>
          <AccordionItem eventKey="0">
            <AccordionHeader>Éditeur du site</AccordionHeader>
            <AccordionBody>Adrien Godon</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="1">
            <AccordionHeader>Hébergeur du site</AccordionHeader>
            <AccordionBody>Code Sandbox</AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2">
            <AccordionHeader>Crédits</AccordionHeader>
            <AccordionBody>https://pixabay.com/fr/</AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
      <br />
    </div>
  );
}
