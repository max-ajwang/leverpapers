import Wrapper from '../assets/wrappers/PricingGuide';
import { LandingNavbar } from '../components';

const PricingGuide = () => {
  return (
    <Wrapper>
      <LandingNavbar />
      <div className="pricingContainer">
        <p className="anchorLinkP">
          <a id="pricetable"></a>
        </p>
        <div className="wrapItem priceTables gray clearAfter">
          <div className="inner">
            <h2>Pricing tables</h2>
            <p className="subHeadTwo">
              Prices are primarily determined based on the service type, writer
              level and urgency (deadline). Review pricing tables for each
              service type below. All prices are in USD currency.
            </p>
            <div className="priceTablesWrap clearAfter">
              <div className="innerTables">
                <div className="tabsContainPricing">
                  <ul className="tabsList main">
                    <li className="tab-link one current" data-tab="tab-1">
                      <span className="tabName">Writing</span>
                    </li>
                    <li className="tab-link two" data-tab="tab-2">
                      <span className="tabName">Editing</span>
                    </li>
                    <li className="tab-link three" data-tab="tab-3">
                      <span className="tabName">Business</span>
                    </li>
                  </ul>
                  <div id="tab-1" className="tabContent current">
                    <div className="tabInner">
                      <p className="tbTitle">
                        Custom writing from scratch<sup>1</sup>. Completely
                        original and tailored to your unique document
                        instructions.
                      </p>
                      <table className="pTable cw">
                        <tbody>
                          <tr>
                            <th className="wLevelEmpty">&nbsp;</th>
                            <th className="wLevel" colSpan="4">
                              Writer Level
                            </th>
                          </tr>
                          <tr>
                            <th className="deadlineItem first">
                              <span>Deadline</span>
                            </th>
                            <th className="lvlItem">High School</th>
                            <th className="lvlItem">Undergraduate</th>
                            <th className="lvlItem">Master</th>
                            <th className="lvlItem">Doctoral</th>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">20 Days</th>
                            <td>$19.00</td>
                            <td>$22.00</td>
                            <td>$27.50</td>
                            <td>$33.50</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">10 Days</th>
                            <td>$19.50</td>
                            <td>$23.00</td>
                            <td>$31.50</td>
                            <td>$35.50</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">7 Days</th>
                            <td>$20.50</td>
                            <td>$24.00</td>
                            <td>$33.00</td>
                            <td>$37.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">5 Days</th>
                            <td>$21.00</td>
                            <td>$25.00</td>
                            <td>$35.00</td>
                            <td>$40.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">4 Days</th>
                            <td>$23.00</td>
                            <td>$26.00</td>
                            <td>$37.00</td>
                            <td>$43.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">3 Days</th>
                            <td>$25.00</td>
                            <td>$30.00</td>
                            <td>$39.00</td>
                            <td>$46.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">2 Days</th>
                            <td>$29.00</td>
                            <td>$33.00</td>
                            <td>$42.00</td>
                            <td>$52.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">24 Hours</th>
                            <td>$33.50</td>
                            <td>$38.50</td>
                            <td>$46.50</td>
                            <td>$59.50</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">12 Hours</th>
                            <td>$37.50</td>
                            <td>$45.50</td>
                            <td>$53.50</td>
                            <td>$67.50</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">8 Hours</th>
                            <td>$42.50</td>
                            <td>$53.50</td>
                            <td>$60.50</td>
                            <td>
                              N/A<sup>ii</sup>
                            </td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">
                              6 Hours<sup>i</sup>
                            </th>
                            <td>$46.00</td>
                            <td>$60.00</td>
                            <td>$68.00</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">3 Hours</th>
                            <td>$54.00</td>
                            <td>$68.00</td>
                            <td>$75.00</td>
                            <td>N/A</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="tab-2" className="tabContent">
                    <div className="tabInner">
                      <p className="tbTitle">
                        Get your written work edited by a seasoned professional.
                      </p>
                      <table className="pTable cw">
                        <tbody>
                          <tr>
                            <th className="wLevelEmpty">&nbsp;</th>
                            <th className="wLevel" colSpan="4">
                              Writer Level
                            </th>
                          </tr>
                          <tr>
                            <th className="deadlineItem first">
                              <span>Deadline</span>
                            </th>
                            <th className="lvlItem">High School</th>
                            <th className="lvlItem">Undergraduate</th>
                            <th className="lvlItem">Master</th>
                            <th className="lvlItem">Doctoral</th>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">20 Days</th>
                            <td>$12.50</td>
                            <td>$14.50</td>
                            <td>$18.50</td>
                            <td>$20.50</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">10 Days</th>
                            <td>$13.50</td>
                            <td>$15.50</td>
                            <td>$19.50</td>
                            <td>$22.50</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">7 Days</th>
                            <td>$15.00</td>
                            <td>$17.00</td>
                            <td>$21.00</td>
                            <td>$25.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">5 Days</th>
                            <td>$16.00</td>
                            <td>$18.00</td>
                            <td>$23.00</td>
                            <td>$28.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">4 Days</th>
                            <td>$17.00</td>
                            <td>$19.00</td>
                            <td>$24.00</td>
                            <td>$29.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">3 Days</th>
                            <td>$18.00</td>
                            <td>$20.00</td>
                            <td>$25.00</td>
                            <td>$32.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">2 Days</th>
                            <td>$21.00</td>
                            <td>$22.00</td>
                            <td>$28.00</td>
                            <td>$36.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">24 Hours</th>
                            <td>$23.50</td>
                            <td>$25.50</td>
                            <td>$31.50</td>
                            <td>$40.50</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">12 Hours</th>
                            <td>$26.50</td>
                            <td>$27.50</td>
                            <td>$34.50</td>
                            <td>$44.50</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">8 Hours</th>
                            <td>$27.50</td>
                            <td>$31.50</td>
                            <td>$38.50</td>
                            <td>
                              N/A<sup>ii</sup>
                            </td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">
                              6 Hours<sup>i</sup>
                            </th>
                            <td>$28.00</td>
                            <td>$33.00</td>
                            <td>$39.00</td>
                            <td>N/A</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">3 Hours</th>
                            <td>$31.00</td>
                            <td>$37.00</td>
                            <td>$42.00</td>
                            <td>N/A</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="tab-3" className="tabContent">
                    <div className="tabInner">
                      <p className="tbTitle">
                        Custom written business documents to help you land your
                        next job<sup>2</sup>
                        in a tough economic climate. These documents are
                        generally one to two single spaced pages (unless you
                        specify otherwise).
                      </p>
                      <table className="pTable bw">
                        <tbody>
                          <tr>
                            <th className="wLevelEmpty">&nbsp;</th>
                            <th className="wLevel" colSpan="4">
                              Document Type
                            </th>
                          </tr>
                          <tr>
                            <th className="deadlineItem first">
                              <span>Deadline</span>
                            </th>
                            <th className="lvlItem">Resume</th>
                            <th className="lvlItem">Cover Letter</th>
                            <th className="lvlItem">C.V.</th>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">7 Days</th>
                            <td>$75.00</td>
                            <td>$30.00</td>
                            <td>$95.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">5 Days</th>
                            <td>$85.00</td>
                            <td>$40.00</td>
                            <td>$110.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">3 Days</th>
                            <td>$95.00</td>
                            <td>$50.00</td>
                            <td>$120.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">2 Days</th>
                            <td>$110.00</td>
                            <td>$60.00</td>
                            <td>$130.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">24 Hours</th>
                            <td>$120.00</td>
                            <td>$70.00</td>
                            <td>$140.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem even">12 Hours</th>
                            <td>$135.00</td>
                            <td>$85.00</td>
                            <td>$160.00</td>
                          </tr>
                          <tr>
                            <th className="deadlineItem odd">8 Hours</th>
                            <td>$155.00</td>
                            <td>$100.00</td>
                            <td>$180.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="pricingNotes">
                  <div className="innerPricenotes">
                    <p>
                      <b>i</b>
                      Deadlines of six (6) hours or less are subject to writer
                      availability, surge pricing, and may have page length
                      restrictions.
                    </p>
                    <p>
                      <b>ii</b>
                      Doctoral writers may not be available for deadlines below
                      twelve (12) hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="freeIncl">
          <h2>Free inclusions</h2>
          <p className="subHeadTwo">
            {' '}
            Order from LeverPapers and get a wide array of free benefits. It's
            what makes us special.
          </p>
          <div className="inclusionsWrap clearAfter">
            <ul className="includesList clearAfter">
              <li className="one">275 words per page</li>
              <li className="two">Title and references page</li>
              <li className="three">24/7 world-className support</li>
              <li className="one">Copyscape originality scan</li>
              <li className="two">Top-Notch Writers</li>
              <li className="three">Free revisions</li>
              <li className="one">100% originality</li>
              <li className="two">Trusted and verified service</li>
              <li className="three">Editing</li>
              <li className="three lRowThree lRowTwo lRow">
                Money back guarantee
              </li>
            </ul>
            <div className="clearZero">&nbsp;</div>
          </div>
        </div>
        <div className="legalNotes">
          <div className="inner">
            <p>
              <b>Legal Notes</b>
            </p>
            <p>
              <b>Availability Intelligence SM</b>
              Availability Intelligence is a service mark of LeverPapers. The
              mark represents our proprietary technology that utilizes various
              signals and data points to determine whether clients can request
              specific contracted writers.
            </p>
            <p>
              <b>1</b> Custom sample writing services are provided by writers on
              our platform. This service category is subject to our Terms and
              Conditions as well as our Fair Use Policy. You must practice fair
              use and cite all provided reference material provided in the order
              cover page. Thanks for playing fairly.
            </p>
            <p>
              <b>2</b> LeverPapers cannot and does not guarantee that if you
              connect with a writer on our platform for business documents (such
              as resumes, cover letters and CVs) that you will secure
              employment. Employers hire based on several signals, including
              experience and other factors out of our control. Our writers
              promise to deliver their best work for you, but they cannot
              guarantee you will land a job.
            </p>
            <p>
              <b>3</b> The graduate writer pool represents a total of 7.3%
              compared to the total number of writers we have in our database.
              This figure is accurate as of 4 October 2016.
            </p>
            <p>
              <b>4</b> Requested writer acceptance rates are based on weekly
              order data we gathered through the months of August and September
              of 2016. The acceptance rate is 90%; however, LeverPapers does not
              guarantee that a requested writer will accept the request. Please
              read our Writer Availability policy for more information.
            </p>
            <p>
              <b>5</b> Free revisions are provided with a three-day turnaround
              time and must fall in line with the original instructions. For
              urgent revision deadlines, additional costs and restrictions may
              apply. Please read our entire revision policy before placing an
              order.
            </p>
            <p>
              <b>6</b> LeverPapers offers money back guarantee if your order is
              not fulfilled, and a full refund if a writer cannot be found. We
              also refund you if the order doesn't meet the original
              instructions. Other refund determinations are made on a
              case-by-case basis, subject to our terms and conditions as well as
              other governing policies.
            </p>
            <p>
              <b>7</b> Leverpapers utilizes various vendors, technology partners
              and services. The company logos listed are registered trademarks
              of their respective companies. LeverPapers claims no association
              or partnership, whether expressed or implied.
            </p>
            <p>
              <b>8</b> LeverPapers cares deeply about data security and utilizes
              various vendors to regularly scan the web property for malicious
              agents. For example, McAfee Secure scans daily while CloudFlare
              scan our website in five minute intervals. However, no platform is
              entirely secure and LeverPapers does not guarantee that its
              services, products and availability won't be compromised.
            </p>
            <p>
              <b>9</b> LeverPapers does not offer two-factor authentication for
              customer accounts. It is used internally (staff members) for the
              majority of our online services as part of our commitment to
              security.
            </p>
            <p>
              <b>®</b> McAfee Secure ®, GeoTrust SSL ®, Google ®, CloudFlare ®,
              Cisco ® and Google for Work ® are registered trademarks, service
              marks or logos of their respective companies. LeverPapers claims
              no association or partnership, whether expressed or implied.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default PricingGuide;
