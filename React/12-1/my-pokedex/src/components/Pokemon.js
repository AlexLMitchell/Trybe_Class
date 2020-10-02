import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {
      id,
      name,
      type,
      averageWeight: { value },
      averageWeight: { measurementUnit },
      image,
    } = this.props.pokemon;
    return (
      <section className={`BillPC ${type}`}>
          <div>
              <p>{name}</p>
              <p>{type}</p>
              <p>{`${value}${measurementUnit}`}</p>
          </div>
          <img src={image} />
      </section>
    );
  }
}
export default Pokemon