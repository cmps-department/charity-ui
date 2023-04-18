import heart from "../images/heart.png";
import funnel from "../images/funnel.png";
import dron from "../images/dron.png";
import top from "../images/top.png";
import done from "../images/done.png";
import descending from "../images/descending.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';




function HomePage() {
  return (

    <main>
      
      <div className="container px-6">
        <h1 className="font-bold text-3xl">
          <img src={heart} alt="Heart" className="inline-block mr-[15px]" />
          Привіт, волонтере !
        </h1>
        

        <Container>
      <Row>
        <Col>
          <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" src={top} className="rounded float-left" alt="..." style={{ borderRadius: '200px', width: '1000px', height: '300px' }} />
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" src={done} className="rounded float-right" alt="..." style={{ borderRadius: '200px', width: '1000px', height: '300px' }} />
          </Card>
        </Col>
       </Row>
        </Container>
        <br />
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <button style={{ display: 'flex', alignItems: 'center', marginRight: '12px' }}>
    <img alt="Фільтр" src={funnel} className="w-5 h-5 mr-2" />
    Фільтр
  </button>
  <button style={{ display: 'flex', alignItems: 'center' }}>
    <img alt="Сортування" src={descending} className="w-5 h-5 mr-2" />
    Сортування
  </button>
</div>
  </div>
  <br />
  <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dron} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Збір коштів на закупівлю розвідувальних дронів RQ-35 Heidrun
              <br />
              Кінцева сумма: 900 000₴
              </Card.Text>
              <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#ffd700",
                    width: "200px",
                    color: 'black',
                    marginTop: '10px',
                    display: "block",
                  }}
                >
                  Задонатити
                </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dron} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Збір коштів на закупівлю розвідувальних дронів RQ-35 Heidrun
              <br />
              Кінцева сумма: 900 000₴
              </Card.Text>
              <Button
              variant="primary"
              style={{
                backgroundColor: "#ffd700",
                width: "200px",
                color: 'black',
                marginTop: '10px',
                display: "block",
              }}
                    >
                      Задонатити
                    </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dron} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Збір коштів на закупівлю розвідувальних дронів RQ-35 Heidrun
              <br />
              Кінцева сумма: 900 000₴
              </Card.Text>
              <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#ffd700",
                    width: "200px",
                    color: 'black',
                    marginTop: '10px',
                    display: "block",
                  }}
                >
                  Задонатити
                </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dron} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Збір коштів на закупівлю розвідувальних дронів RQ-35 Heidrun
              <br />
              Кінцева сумма: 900 000₴
              </Card.Text>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#ffd700",
                  width: "200px",
                  color: 'black',
                  marginTop: '10px',
                  display: "block",
                }}
                      >
                        Задонатити
                      </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dron} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Збір коштів на закупівлю розвідувальних дронів RQ-35 Heidrun
              <br />
              Кінцева сумма: 900 000₴
              </Card.Text>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#ffd700",
                  width: "200px",
                  color: 'black',
                  marginTop: '10px',
                  display: "block",
                }}
                  >
                    Задонатити
                  </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dron} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Збір коштів на закупівлю розвідувальних дронів RQ-35 Heidrun
              <br />
              Кінцева сумма: 900 000₴
              </Card.Text>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#ffd700",
                  width: "200px",
                  color: 'black',
                  marginTop: '10px',
                  display: "block",
                }}
>
                  Задонатити
                </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dron} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Збір коштів на закупівлю розвідувальних дронів RQ-35 Heidrun
              <br />
              Кінцева сумма: 900 000₴
              </Card.Text>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#ffd700",
                  width: "200px",
                  color: 'black',
                  marginTop: '10px',
                  display: "block",
                }}
>
                Задонатити
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dron} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Збір коштів на закупівлю розвідувальних дронів RQ-35 Heidrun
              <br />
              Кінцева сумма: 900 000₴
              </Card.Text>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#ffd700",
                  width: "200px",
                  color: 'black',
                  marginTop: '10px',
                  display: "block",
                }}
>
                Задонатити
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    </main>
  );
}

export default HomePage;
