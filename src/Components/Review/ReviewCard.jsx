import styled from 'styled-components';
import Rating from './Rating';

const ReviewCard = ({reviewData}) => {
  const {serviceTitle,rating,postedDate,name,image,email,comment}= reviewData || {}
  return (
    <StyledWrapper>
      <div className="card !bg-[#20161f]/75">
        <div className="h-20 w-20 aspect-square bg-green-500 rounded-full ring-green-500 ring-offset-4 ring-offset-[#4f4c52] ring-4">
          <img className="object-cover w-full h-full rounded-full bg-gray-800" src={image} alt="" />
        </div>
        <div className="title">{name}</div>
        <div className="rating"><Rating rating={rating}/></div>
        <p className="italic text-xl mb-1">{serviceTitle}</p>
        <p className="description line-clamp-4">{comment}</p>
        <p className="text-sm text-gray-500">{postedDate}</p>
      </div>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  .card {
    --background: #fff;
    --cardShadow: rgba(32,33,37,.1);
    --cardShadowHover: rgba(32,33,37,.06);
    --cardShadowActive: rgba(32,33,37,.55);
    --cardBorder: #dbdce0;
    --cardBorderActive: #1a73e8;
    --textColor: #202125;
    --linkColor: #1967d2;
    --ratingColor: #faab00;
  }

  @media (prefers-color-scheme: dark) {
    .card {
      --background: #3c4043;
      --cardShadow: rgba(0,0,0,.28);
      --cardShadowHover: rgba(0,0,0,.16);
      --cardShadowActive: rgba(0,0,0,.55);
      --cardBorder: #202125;
      --cardBorderActive: #8ab4f8;
      --textColor: #e9eaee;
      --linkColor: #8ab4f8;
    }
  }

  .card {
    color: var(--textColor);
    border: 1px solid var(--cardBorder);
    padding: 25px;
    box-shadow: 8px 8px 0 var(--cardShadow);
    transition: box-shadow .5s, transform .5s;
    border-radius: 8px;
  }

  .card:hover {
    transform: translate(-2px, -4px);
    box-shadow: 16px 16px 0 var(--cardShadowHover);
  }

  .card:active {
    transform: translate(-2px, -4px);
    border: 2px solid var(--cardBorderActive);
    box-shadow: 4px 4px 0 var(--cardShadowActive);
  }

  .card > .icon,
  .card > .title,
  .card > .description {
    margin-bottom: 0.7em;
    cursor: default;
    user-select: none;
  }

  .card > .title {
    margin-top: 1.5em;
    font-weight: bold;
  }

  .card > .description {
    line-height: 1.5em;
    min-height: 6em;
  }

  .card > .icon {
    font-size: 3em;
    margin-bottom: .2em;
  }

  .card > .rating {
    font-size: 1.5em;
    margin-bottom: 0.8em;
    color: var(--ratingColor);
    font-weight: bold;
    position: relative;
    width: max-content;
  }

  .card > .rating:before {
    content: "";
  }

  .card > .rating:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: 0;
    width: calc(var(--rating) * 1%);
    overflow: hidden;
  }

  .card > .link {
    margin-bottom: 1rem;
    color: var(--linkColor);
    font-size: .8em;
    font-weight: 600;
  }

  /* Optional ~ Link the whole card */
  .card > .link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .card > .link:after {
    content: "↗";
    display: inline-block;
    margin-left: .3em;
    transition: transform .3s ease-in-out;
  }

  .card:hover > .link:after {
    transform: translate(.2em, -.2em);
  }`;

export default ReviewCard;
