import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'

if (typeof window !== 'undefined') ReactGA.pageview(location.pathname)

const InterestSelect = ({className}) => (
  <fieldset className={className}>
    <legend className="label select__title">Select Interest:</legend>
    <label className="label select__label">
      <input
        className="select__checkbox"
        type="checkbox"
        name="interest"
        value="dev"
      />
      <span className="select__control"></span>
      Dev
    </label>
    <label className="label select__label">
      <input
        className="select__checkbox"
        type="checkbox"
        name="interest"
        value="ux"
      />
      <span className="select__control"></span>
      UX
    </label>
    <label className="label select__label">
      <input
        className="select__checkbox"
        type="checkbox"
        name="interest"
        value="ui"
      />
      <span className="select__control"></span>
      UI
    </label>
    <label className="label select__label">
      <input
        className="select__checkbox"
        type="checkbox"
        name="interest"
        value="dm"
      />
      <span className="select__control"></span>
      DM
    </label>
  </fieldset>
)

const ContactPage = styled.main`
  --spacing-v: 1.25rem;
  --spacing-v--s: 0.5rem;
  --spacing-h: 3.5rem;
  --spacing-h--s: 0.3rem;
  --color-red: #e2231a;
  --color-dark-red: #c10909;
  --color-white: #fff;
  --color-black: #000;
  --color-grey: #808285;

  font-size: 22px;
  line-height: 1.25;
  height: 100vh;

  .site-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    padding: var(--spacing-v) var(--spacing-h);
    background: var(--color-grey);
  }

  .logo {
    position: relative;
    z-index: 999;
    top: 3px;
    width: auto;
    height: 26px;
  }

  @media (min-width: 700px) {
    .header {
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .section__container {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 700px) {
    .section__container {
      height: 100%;
      min-height: 500px;
      flex-direction: row;
    }
  }

  .section__about,
  .section__contact {
    flex-shrink: 0;
    height: 100%;
    min-height: 500px;
    padding: 1rem var(--spacing-h);
  }

  .section__about {
    flex: 1;
    display: flex;
    align-items: flex-start;
    position: relative;
    padding-top: 20%;
    color: #fff;
    padding-right: 10%;
    background: linear-gradient(
        rgba(226, 36, 26, 0.5),
        rgba(226, 36, 26, 0.5)
      ),
      url(https://images.unsplash.com/photo-1531496681078-27dc2277e898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)
        no-repeat center / cover;
    overflow-x: hidden;
  }

  .section__contact {
    flex: 1.2;
    margin-top: 3.5rem;
  }

  @media (min-width: 700px) {
    .section__contact {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 750px;
    }
    .section__about {
      min-height: 750px;
    }
  }

  .title {
    margin: var(--spacing-v) 0;
    font-size: 2.2rem;
  }

  .title--mobile {
    margin: calc(2 * var(--spacing-v)) 0;
    text-align: center;
  }

  .title--desktop {
    font-size: 2.2rem;
  }

  @media (min-width: 700px) {
    .title--desktop {
      font-size: 60px;
    }
  }

  .contact-form,
  .section__about-content {
    max-width: 520px;
    margin: 0 auto;
  }

  .label,
  .input,
  .button {
    font-size: 0.85rem;
  }

  .label--block {
    display: inline-block;
    width: 100%;
    margin-bottom: var(--spacing-v);
  }

  .input {
    width: 100%;
    margin-top: var(--spacing-v--s);
    background-color: transparent;
    color: var(--color-black);
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 1px solid var(--color-black);
    border-radius: 0;
  }

  .input:invalid {
    border-color: var(--color-red);
    outline: none;
    box-shadow: none;
  }

  .select__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: var(--spacing-v);
    padding-bottom: var(--spacing-v--s);
    border: none;
    background-color: #fff;
    padding: 1rem;
    border-radius: 3px;
    color: #000;
    min-height: 3rem;
    width: 150%;

    padding: calc(var(--spacing-v) * 2);
  }

  .select__container--desktop {
    display: none;
  }

  .select__title {
    width: 100%;
    padding-top: 5.5rem;
    margin-bottom: -1rem;
    font-size: 20px;
    font-weight: 300;
  }

  .select__label {
    white-space: nowrap;
    font-size: 20px;
    font-weight: 300;
    line-height: 2.5;
  }

  .select__checkbox {
    position: absolute;
    top: -999rem;
    left: -999rem;
  }

  input:placeholder-shown + .sneaky-label {
    position: relative;
    top: 35px;
    color: #777;
    transition: all 0.3s ease-in-out;
  }

  .label .sneaky-label {
    top: 0;
    color: black;
    font-size: 0.6rem;
  }

  .phone-confidential {
    font-size: 10px;
    font-weight: 300;
  }

  .select__control {
    --size: 0.7rem;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    border: 1px solid var(--color-black);
    position: relative;
    top: -1px;
    margin-right: calc(var(--spacing-h--s) * 2);
  }

  .select__checkbox:focus + .select__control {
    border-color: var(--color-red);
  }

  .select__checkbox:checked + .select__control {
    background-color: var(--color-black);
  }

  .paragraph {
    display: inline-block;
    margin-top: var(--spacing-v);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.6;
  }

  .button {
    margin: var(--spacing-v) 0;
    padding: 0.5rem 2.5rem;
    border: none;
    border-radius: 0.1rem;
    color: var(--color-white);
    font-weight: 700;
    cursor: pointer;

    transition: background-color 0.4s ease-in-out;
    background-color: var(--color-red);
  }

  .button:focus,
  .button:hover {
    background-color: var(--color-dark-red);
  }

  .bold {
    font-weight: 700;
  }

  .bold--desktop {
    font-weight: 300;
  }

  .center {
    width: 100%;
    text-align: center;
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 700px) {
    .select__container {
      flex-direction: row;
      width: 100%;
      padding-left: 0;
      padding: 0.75rem 0 1rem 0;
    }

    .select__container--desktop {
      display: flex;
    }

    .section__about-content {
      position: absolute;
      top: 80px;
      padding-right: 50px;
    }

    .select__title {
      padding-top: 0;
      margin-bottom: 0;
      font-size: 0.85rem;
      font-weight: initial;
    }

    .select__control {
      margin-right: var(--spacing-h--s);
      top: 1px;
    }

    .select__label {
      font-size: 0.85rem;
      font-weight: initial;
      line-height: 2;
    }

    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: initial;
    }

    .bold--desktop {
      font-weight: 700;
    }
  }
`

const Logo = styled.svg`
  .cls-1 {
    fill: #e2231a;
  }
  .cls-2 {
    fill: #fff;
  }
`

export default () => (
  <ContactPage className="site-layout">
    <header className="header">
      <a href="https://redacademy.com/vancouver/">
        <Logo
          role="img"
          aria-label="RED Academy"
          className="logo"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="639px"
          height="108px"
          viewBox="80 245.5 639 108"
          enable-background="new 80 245.5 639 108"
        >
          <title>RED Academy</title>
          <rect
            className="cls-2"
            x="83.224"
            y="247.203"
            width="211.007"
            height="105.594"
          />
          <path
            className="cls-1"
            d="M155.762,290.943c0.232-4.496-1.415-8.889-4.547-12.125c-3.546-3.516-9.094-5.531-15.717-5.531h-24.372v53.381h11.64
        v-17.112h10.14l11.186,17.112h13.641l-13.186-19.112C151.568,305.135,156.141,298.361,155.762,290.943z M134.452,298.992h-11.686
        v-15.156h11.67c5.578,0,9.094,2.516,9.094,7.578C143.592,295.977,140.03,298.992,134.452,298.992z"
          />
          <polygon
            className="cls-1"
            points="179.604,305.023 204.46,305.023 204.46,294.46 179.604,294.46 179.604,283.912 208.006,283.912 208.006,273.348 
        167.933,273.348 167.933,326.652 208.506,326.652 208.506,316.089 179.604,316.089 "
          />
          <path
            className="cls-1"
            d="M241.487,273.348h-20.794v52.789h20.794c16.672,0,28.403-11.563,28.403-26.645
        C269.89,284.912,258.22,273.348,241.487,273.348z M241.487,315.588h-9.094v-31.676h9.094c9.64,0,16.232,6.531,16.232,16.096
        C257.659,309.056,251.126,315.588,241.487,315.588z"
          />
          <path
            className="cls-2"
            d="M352.568,273.348h-8.625l-23.325,52.789h9.64l5.578-12.563h24.887l5.578,12.563h9.579L352.568,273.348z M338.927,305.523
        l9.095-21.112l9.094,21.112H338.927z"
          />
          <path
            className="cls-2"
            d="M406.343,319.09c-10.14,0-17.247-8.549-17.247-18.597c0-10.609,7.107-18.597,17.247-18.597
        c5.604,0.023,10.94,2.393,14.717,6.533l6.063-7.033c-5.591-5.334-13.07-8.229-20.794-8.049c-16.233,0-27.388,12.125-27.388,27.146
        c0,15.02,11.67,26.645,27.388,27.145c9.639,0,15.717-3.517,21.31-9.094l-6.063-6.063C416.998,316.589,412.936,319.09,406.343,319.09
        z"
          />
          <path
            className="cls-2"
            d="M464.165,273.348h-8.624l-23.326,52.789h9.641l5.576-12.563h24.856l5.578,12.563h9.639L464.165,273.348z M450.523,305.523
        l9.094-21.112l9.095,21.112H450.523z"
          />
          <path
            className="cls-2"
            d="M515.908,273.848h-19.779v52.289h19.779c16.231,0,27.902-11.563,27.902-26.145
        C543.813,284.912,532.642,273.848,515.908,273.848z M515.908,318.089h-10.141v-35.192h10.141c11.155,0,18.188,7.578,18.188,17.597
        c0,10.018-7.031,17.612-18.188,17.612V318.089z"
          />
          <polygon
            className="cls-2"
            points="564.091,304.023 590.463,304.023 590.463,295.977 564.091,295.977 564.091,282.396 594.024,282.396 
        594.024,273.848 554.967,273.848 554.967,326.152 594.524,326.152 594.524,318.104 564.091,318.104 "
          />
          <polygon
            className="cls-2"
            points="631.552,298.492 615.319,273.848 605.695,273.848 605.695,326.152 614.304,326.152 614.304,288.943 
        631.052,313.572 631.552,313.572 648.3,288.943 648.3,326.152 657.424,326.152 657.424,273.848 647.784,273.848 "
          />
          <polygon
            className="cls-2"
            points="691.42,296.977 676.703,273.848 665.548,273.848 686.342,305.523 686.843,305.523 686.843,326.652 695.981,326.652 
        695.981,305.523 716.776,273.848 706.121,273.848 "
          />
        </Logo>
      </a>
    </header>

    <form
      className="section__container"
      method="POST"
      action="https://formspree.io/xrgedrgb"
    >
      <section className="section__about">
        <div className="section__about-content">
          <h1 className="title title--desktop bold">
            Connect with the RED Talent
          </h1>

          <p className="paragraph bold bold--desktop">
            Save a spot and tell us more about the skills you are
            looking for. We will send you relevant information to make
            this process more efficient and effective for you or your
            company.
          </p>

          <InterestSelect className="select__container mobile-only" />
        </div>
      </section>

      <section className="section__contact">
        <div className="contact-form">
          <InterestSelect className="select__container select__container--desktop" />

          <label className="label label--block">
            <span className="sneaky-label">Full Name</span>
            <input
              className="input"
              type="text"
              name="name"
              required
            />
          </label>

          <label className="label label--block">
            <span className="sneaky-label">Email</span>
            <input
              className="input"
              type="email"
              name="_replyto"
              required
            />
          </label>

          <label className="label label--block">
            <span className="sneaky-label">Company (Optional)</span>
            <input className="input" type="text" name="company" />
          </label>

          <label className="label label--block">
            <span className="sneaky-label">
              Phone Number (Optional)
            </span>
            <input
              className="input"
              type="tel"
              name="phone"
              pattern="^\+?\d{0,13}"
            />
            <span className="phone-confidential">
              Your phone number is kept confidential and not shared
              with others
            </span>
          </label>

          <div className="center">
            <button className="button" type="submit">
              Connect
            </button>
          </div>
        </div>
      </section>
    </form>
  </ContactPage>
)
