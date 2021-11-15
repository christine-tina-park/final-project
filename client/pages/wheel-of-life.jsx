import React from 'react';
import AppContext from '../lib/app-context';

export default class WheelOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: 10,
      con: 10,
      fam: 10,
      fin: 10,
      hea: 10,
      lov: 10,
      rec: 10,
      sel: 10,
      soc: 10,
      spi: 10,
      wheelUrl: 'https://image-charts.com/chart?chco=FF9797%7CFFC997%7CF3E078%7CA0E845%7C7BE8F6%7C63BDFF%7CC3B9FF%7CCA90DE%7CFFCAF0%7CEA9BD4&chd=t%3A10%2C10%2C10%2C10%2C10%2C10%2C10%2C10%2C10%2C10&chl=Career%7CFinance%7CHealth%7CSocial%7CFamily%7CLove%7CRecreation%7CContribution%7CSpirituality%7CSelf-Image&chlps=font.size%2C1%7Cpadding.right%2C10&chs=300x300&cht=pa&chxt=x%2Cy'
    };
    this.updateWheelUrl = this.updateWheelUrl.bind(this);
    this.updateWheelData = this.updateWheelData.bind(this);
  }

  updateWheelUrl() {
    const { car, con, fam, fin, hea, lov, rec, sel, soc, spi } = this.state;
    const newUrl = `https://image-charts.com/chart?chco=FF9797%7CFFC997%7CF3E078%7CA0E845%7C7BE8F6%7C63BDFF%7CC3B9FF%7CCA90DE%7CFFCAF0%7CEA9BD4&chd=t%3A${car}%2C${fin}%2C${hea}%2C${soc}%2C${fam}%2C${lov}%2C${rec}%2C${con}%2C${spi}%2C${sel}&chl=Career%7CFinance%7CHealth%7CSocial%7CFamily%7CLove%7CRecreation%7CContribution%7CSpirituality%7CSelf-Image&chlps=font.size%2C10.5%7Cpadding.right%2C10&chs=300x300&cht=pa&chxt=x%2Cy`;
    this.setState({ wheelUrl: newUrl });
  }

  componentDidMount() {
    const token = window.localStorage.getItem('life-planner-jwt');
    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    };
    fetch('/api/wol/call', req)
      .then(res => res.json())
      .then(result => {
        const { car, con, fam, fin, hea, lov, rec, sel, soc, spi } = result;
        this.setState = { car, con, fam, fin, hea, lov, rec, sel, soc, spi };
      })
      .then(result => {
        this.updateWheelUrl();
      })
      .catch(err => console.error(err));
  }

  updateWheelData() {
    const token = window.localStorage.getItem('life-planner-jwt');
    const { user } = this.context;
    const userId = user.userId;
    const { id, value } = event.target;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify({
        userId: userId,
        id: id,
        value: value
      })
    };
    fetch('/api/wol/update', req)
      .then(res => res.json())
      .then(result => {
        const { car, con, fam, fin, hea, lov, rec, sel, soc, spi } = result;
        this.setState = { car, con, fam, fin, hea, lov, rec, sel, soc, spi };
      })
      .then(result => {
        this.updateWheelUrl();
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
        <div className="planner-body" data-view="wheel-of-life">
          <div className="row">
            <div className="col-one-third padding-t1">
              <img id="imgWheel" alt="wheel-of-life" src={ this.state.wheelUrl } />
            </div>
            <div className="col-one-third padding-t2">
              <form id="formWheel1">
                <div className="category-box c-1">
                  <label htmlFor="career" className="category-label">Career</label>
                  <select id="car" name="career" onChange={ this.updateWheelData }>
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Careers, Businesses, Studies</h4>
                </div>
                <div className="category-box c-2">
                  <label htmlFor="finance" className="category-label">Finance</label>
                  <select id="fin" name="finance">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Financial habits, Incomes, Savings, Investments</h4>
                </div>
                <div className="category-box c-3">
                  <label htmlFor="health" className="category-label">Health</label>
                  <select id="hea" name="health">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Healthy lifestyle, Diet, Sleep, Exercise</h4>
                </div>
                <div className="category-box c-4">
                  <label htmlFor="social" className="category-label">Social</label>
                  <select id="soc" name="social">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Positive, like-minded friends to talk about everything</h4>
                </div>
                <div className="category-box c-5">
                  <label htmlFor="family" className="category-label">Family</label>
                  <select id="fam" name="family">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Relationship with family members</h4>
                </div>
              </form>
            </div>
            <div className="col-one-third padding-t3">
              <form id="formWheel2">
                <div className="category-box c-6">
                  <label htmlFor="love" className="category-label">Love</label>
                  <select id="lov" name="love">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Vibrancy and satisfaction of current love/single life</h4>
                </div>
                <div className="category-box c-7">
                  <label htmlFor="recreation" className="category-label">Recreation</label>
                  <select id="rec" name="recreation">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Hobbies &amp; Interests outside of work</h4>
                </div>
                <div className="category-box c-8">
                  <label htmlFor="contribution" className="category-label">Contribution</label>
                  <select id="con" name="contribution">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Positive contribution to the world</h4>
                </div>
                <div className="category-box c-9">
                  <label htmlFor="spirituality" className="category-label">Spirituality</label>
                  <select id="spi" name="spirituality">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Connection with the Universe and your higher self</h4>
                </div>
                <div className="category-box c-10">
                  <label htmlFor="selfImage" className="category-label">Self-Image</label>
                  <select id="sel" name="selfImage">
                    <option value="">Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <h4>Self- Talk, Image, Esteem, Confidence</h4>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

WheelOfLife.contextType = AppContext;
