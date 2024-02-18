import "./app.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Registration from "./pages/auth/Registration";
import Layout from "./pages/Layout";
import ChangePassword from "./pages/auth/ChangePassword";
import { useSelector } from "react-redux";
import { UserAuthContextProvider } from "./pages/auth/UserAuthContext";
import PhoneSignUp from "./pages/auth/PhoneSignUp";

// Admin start
import Sidebar from "./AdminComponent/Components/Sidebar";
import Admin from "./AdminComponent/Components/Admin";
import Service from "./AdminComponent/Components/Service";
import CancelApplication from "./AdminComponent/Components/CancelApplication";
import OldApplication from "./AdminComponent/Components/OldApplication";
import OldApplicationData from "./AdminComponent/Components/OldApplicationData";
import Reminder from "./AdminComponent/Components/Reminder";
import Feedbacks from "./AdminComponent/Components/Feedbacks";
import Contact from "./AdminComponent/Components/Contact";
import Payment from "./AdminComponent/Components/Payment";
// Admin end
// User start
import ContactUs from "./UserComponent/Components/ContactUs";
import SideBar from "./UserComponent/Components/SideBar";
import Copyright from "./UserComponent/Components/Copyright";
import PopularOptions from "./UserComponent/Components/PopularOptions";
import Trademark from "./UserComponent/Components/Trademark";
import Patent from "./UserComponent/Components/Patent";
import Licenses from "./UserComponent/Components/Licenses";
import Index from "./UserComponent/Components/Index";
import SelectConversionType from "./UserComponent/Components/SelectConversionType";
import UpdateCorporateInformation from "./UserComponent/Components/UpdateCorporateInformation";
import SpecialBusinessEntities from "./UserComponent/Components/SpecialBusinessEntities";
import CloseABusiness from "./UserComponent/Components/CloseABusiness";
import GovernmentRegistration from "./UserComponent/Components/GovernmentRegistration";
import UnderCompliances from "./UserComponent/Components/UnderCompliances";
import TaxReturnFilings from "./UserComponent/Components/TaxReturnFilings";
import PrivateLimitedCompanyRegistration from "./UserComponent/FormComponents/PrivateLimitedCompanyRegistration";
import DocumentWallet from "./UserComponent/Components/DocumentWallet";
import Profile from "./UserComponent/Components/Profile";
import LimitedLiabilityPartnershipRegistration from "./UserComponent/FormComponents/LimitedLiabilityPartnershipRegistration";
import PartnershipFirmRegistration from "./UserComponent/FormComponents/PartnershipFirmRegistration";
import OnePersonCompanyRegistration from "./UserComponent/FormComponents/OnePersonCompanyRegistration";
import SoleProprietarshipFirmRegistration from "./UserComponent/FormComponents/SoleProprietarshipFirmRegistration";
import NidhiCompanyRegistration from "./UserComponent/FormComponents/NidhiCompanyRegistration";
import ProducerCompanyRegistration from "./UserComponent/FormComponents/ProducerCompanyRegistration";
import Section8CompanyRegistration from "./UserComponent/FormComponents/Section8CompanyRegistration";
import RegisterAnIndianSubsidiary from "./UserComponent/FormComponents/RegisterAnIndianSubsidiary";
import TrademarkRegistration from "./UserComponent/FormComponents/TrademarkRegistration";
import TrademarkObjectionReply from "./UserComponent/FormComponents/TrademarkObjectionReply";
import TrademarkRenewal from "./UserComponent/FormComponents/TrademarkRenewal";
import TrademarkOpposition from "./UserComponent/FormComponents/TrademarkOpposition";
import TrademarkAsignment from "./UserComponent/FormComponents/TrademarkAsignment";
import ARAICertification from "./UserComponent/FormComponents/ARAICertification";
import FactoryLicense from "./UserComponent/FormComponents/FactoryLicense";
import TradeLicense from "./UserComponent/FormComponents/TradeLicense";
import DrugLicense from "./UserComponent/FormComponents/DrugLicense";
import LabourLicense from "./UserComponent/FormComponents/LabourLicense";
import AyushLicense from "./UserComponent/FormComponents/AyushLicense";
import ISOCertification from "./UserComponent/FormComponents/ISOCertification";
import ICATCertification from "./UserComponent/FormComponents/ICATCertification";
import Liquor from "./UserComponent/FormComponents/Liquor";
import CopyrightRegistration from "./UserComponent/FormComponents/CopyrightRegistration";
import DesignRegistration from "./UserComponent/FormComponents/DesignRegistration";
import ProprietorshipToPartnership from "./UserComponent/FormComponents/ProprietorshipToPartnership";
import ProprietorshipToPrivateLimitedCompany from "./UserComponent/FormComponents/ProprietorshipToPrivateLimitedCompany";
import ProprietorshipToLLP from "./UserComponent/FormComponents/ProprietorshipToLLP";
import ProprietorshipToOPC from "./UserComponent/FormComponents/ProprietorshipToOPC";
import PartnershipToLLP from "./UserComponent/FormComponents/PartnershipToLLP";
import PartnershipToPrivateLimitedCompany from "./UserComponent/FormComponents/PartnershipToPrivateLimitedCompany";
import LLPToPrivateLimitedCompany from "./UserComponent/FormComponents/LLPToPrivateLimitedCompany";
import OPCToPrivateLimitedCompany from "./UserComponent/FormComponents/OPCToPrivateLimitedCompany";
import PrivateLimitedCompanyToLLP from "./UserComponent/FormComponents/PrivateLimitedCompanyToLLP";
import PrivateCompanyToPublicCompany from "./UserComponent/FormComponents/PrivateCompanyToPublicCompany";
import AddorRemoveaDirector from "./UserComponent/FormComponents/AddorRemoveaDirector";
import AddorRemoveaPartner from "./UserComponent/FormComponents/AddorRemoveaPartner";
import ChangeBusinessActivity from "./UserComponent/FormComponents/ChangeBusinessActivity";
import ChangeRegisteredOffice from "./UserComponent/FormComponents/ChangeRegisteredOffice";
import ChangeCompanyName from "./UserComponent/FormComponents/ChangeCompanyName";
import ChangeLLPAgreement from "./UserComponent/FormComponents/ChangeLLPAgreement";
import ChangePartnershipDeed from "./UserComponent/FormComponents/ChangePartnershipDeed";
import IncreaseAuthorisedShareCapital from "./UserComponent/FormComponents/IncreaseAuthorisedShareCapital";
import DissolveaPartnershipFarm from "./UserComponent/FormComponents/DissolveaPartnershipFarm";
import CloseaLimitedLiabilityPartnership from "./UserComponent/FormComponents/CloseaLimitedLiabilityPartnership";
import CloseOnePersonCompany from "./UserComponent/FormComponents/CloseOnePersonCompany";
import CloseaPrivateLimitedCompany from "./UserComponent/FormComponents/CloseaPrivateLimitedCompany";
import GstRegistration from "./UserComponent/FormComponents/GstRegistration";
import ImportExportCodeRegistration from "./UserComponent/FormComponents/ImportExportCodeRegistration";
import LUTUnderGst from "./UserComponent/FormComponents/LUTUnderGst";
import NSICRegistration from "./UserComponent/FormComponents/NSICRegistration";
import StartupIndiaRegistration from "./UserComponent/FormComponents/StartupIndiaRegistration";
import SSIMSMERegistration from "./UserComponent/FormComponents/SSIMSMERegistration";
import ShopEstablishmentRegistration from "./UserComponent/FormComponents/ShopEstablishmentRegistration";
import ProfessionalTaxRegistration from "./UserComponent/FormComponents/ProfessionalTaxRegistration";
import TANApplication from "./UserComponent/FormComponents/TANApplication";
import FSSAIApplication from "./UserComponent/FormComponents/FSSAIApplication";
import ESIRegistration from "./UserComponent/FormComponents/ESIRegistration";
import PFRegistration from "./UserComponent/FormComponents/PFRegistration";
import GEMRegistration from "./UserComponent/FormComponents/GEMRegistration";
import PANApplication from "./UserComponent/FormComponents/PANApplication";
import DIR3DINKYCFilling from "./UserComponent/FormComponents/DIR3DINKYCFilling";
import ROCReturnFillingforLLP from "./UserComponent/FormComponents/ROCReturnFillingforLLP";
import ROCReturnFillingforOPC from "./UserComponent/FormComponents/ROCReturnFillingforOPC";
import ROCReturnFillingforPvtLtd from "./UserComponent/FormComponents/ROCReturnFillingforPvtLtd";
import PersonalorIndividualIncomeTaxFiling from "./UserComponent/FormComponents/PersonalorIndividualIncomeTaxFiling";
import BusinessIncometaxFiling from "./UserComponent/FormComponents/BusinessIncometaxFiling";
import CompanyIncometaxFiling from "./UserComponent/FormComponents/CompanyIncometaxFiling";
import TDSFiling from "./UserComponent/FormComponents/TDSFiling";
import GSTReturnFiling from "./UserComponent/FormComponents/GSTReturnFiling";
import PatentSearch from "./UserComponent/FormComponents/PatentSearch";
import ProvisionalPatent from "./UserComponent/FormComponents/ProvisionalPatent";
import PermanentPatent from "./UserComponent/FormComponents/PermanentPatent";
// User end
// Account Start
import InvoicePage from './components/InvoicePage';
import Sidebar1 from "./AccountComponent/Sidebar1";
// Account end
// Backend Start
import Userdata from "./BackendComponent/Userdata";
import Sidebar2 from "./BackendComponent/Sidebar2";
import Dashboard1 from "./BackendComponent/Dashboard1";
import Account from "./AccountComponent/Account";
// Backend end

function App() {
  const { access_token, access_token1, access_token2, access_token3 } =
    useSelector((state) => state.auth);
    const savedInvoice = window.localStorage.getItem('invoiceData');
  let data = null;
  try {
      if (savedInvoice) {
          data = JSON.parse(savedInvoice);
      }
  }
  catch (_e) { }
  const onInvoiceUpdated = (invoice) => {
      window.localStorage.setItem('invoiceData', JSON.stringify(invoice));
  };
  return (
    <>
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route
                path="/"
                element={
                  !access_token1 ? <LoginReg /> : <Navigate to="/Dashboard1" />
                }
              />
              <Route
                path="/"
                element={
                  !access_token3 ? <LoginReg /> : <Navigate to="/Admin" />
                }
              />
              <Route
                path="/"
                element={
                  !access_token2 ? <LoginReg /> : <Navigate to="/Account" />
                }
              />
              <Route
                path="/"
                element={
                  !access_token ? <LoginReg /> : <Navigate to="/Index" />
                }
              />

              <Route path="Registration" element={<Registration />} />
              <Route path="Phonesignup" element={<PhoneSignUp />} />
              <Route
                path="sendpasswordresetemail"
                element={<SendPasswordResetEmail />}
              />
              <Route path="ChangePassword" element={<ChangePassword />} />

              <Route
                path="api/user/reset/:id/:token"
                element={<ResetPassword />}
              />
            </Route>
            <Route
              path=""
              element={access_token ? <SideBar /> : <Navigate to="/" />}
            >
              <Route path="Index" element={<Index />} />
              <Route path="PopularOptions" element={<PopularOptions />} />
              <Route
                path="SpecialBusinessEntities"
                element={<SpecialBusinessEntities />}
              />
              <Route
                path="NidhiCompanyRegistration"
                element={<NidhiCompanyRegistration />}
              />
              <Route
                path="ProducerCompanyRegistration"
                element={<ProducerCompanyRegistration />}
              />
              <Route
                path="Section8CompanyRegistration"
                element={<Section8CompanyRegistration />}
              />
              <Route
                path="RegisterAnIndianSubsidiary"
                element={<RegisterAnIndianSubsidiary />}
              />
              <Route path="Trademark" element={<Trademark />} />
              <Route
                path="TrademarkRegistration"
                element={<TrademarkRegistration />}
              />
              <Route
                path="TrademarkObjectionReply"
                element={<TrademarkObjectionReply />}
              />
              <Route path="TrademarkRenewal" element={<TrademarkRenewal />} />
              <Route
                path="TrademarkAsignment"
                element={<TrademarkAsignment />}
              />
              <Route
                path="TrademarkOpposition"
                element={<TrademarkOpposition />}
              />
              <Route path="Patent" element={<Patent />} />
              <Route path="Copyright" element={<Copyright />} />
              <Route
                path="SelectConversionType"
                element={<SelectConversionType />}
              />
              <Route
                path="UpdateCorporateInformation"
                element={<UpdateCorporateInformation />}
              />
              <Route path="CloseABusiness" element={<CloseABusiness />} />
              <Route
                path="GovernmentRegistration"
                element={<GovernmentRegistration />}
              />
              <Route
                path="LimitedLiabilityPartnershipRegistration"
                element={<LimitedLiabilityPartnershipRegistration />}
              />
              <Route
                path="PartnershipFirmRegistration"
                element={<PartnershipFirmRegistration />}
              />
              <Route
                path="OnePersonCompanyRegistration"
                element={<OnePersonCompanyRegistration />}
              />
              <Route
                path="SoleProprietarshipFirmRegistration"
                element={<SoleProprietarshipFirmRegistration />}
              />
              <Route
                path="PrivateLimitedCompanyRegistration"
                element={<PrivateLimitedCompanyRegistration />}
              />
              <Route path="ARAICertification" element={<ARAICertification />} />
              <Route path="FactoryLicense" element={<FactoryLicense />} />
              <Route path="TradeLicense" element={<TradeLicense />} />
              <Route path="DrugLicense" element={<DrugLicense />} />
              <Route path="LabourLicense" element={<LabourLicense />} />
              <Route path="AyushLicense" element={<AyushLicense />} />
              <Route path="ISOCertification" element={<ISOCertification />} />
              <Route path="Liquor" element={<Liquor />} />
              <Route
                path="CopyrightRegistration"
                element={<CopyrightRegistration />}
              />
              <Route
                path="DesignRegistration"
                element={<DesignRegistration />}
              />
              <Route
                path="ProprietorshipToPartnership"
                element={<ProprietorshipToPartnership />}
              />
              <Route
                path="ProprietorshipToPrivateLimitedCompany"
                element={<ProprietorshipToPrivateLimitedCompany />}
              />
              <Route
                path="ProprietorshipToLLP"
                element={<ProprietorshipToLLP />}
              />
              <Route
                path="ProprietorshipToOPC"
                element={<ProprietorshipToOPC />}
              />
              <Route path="PartnershipToLLP" element={<PartnershipToLLP />} />
              <Route
                path="PartnershipToPrivateLimitedCompany"
                element={<PartnershipToPrivateLimitedCompany />}
              />
              <Route
                path="LLPToPrivateLimitedCompany"
                element={<LLPToPrivateLimitedCompany />}
              />
              <Route
                path="OPCToPrivateLimitedCompany"
                element={<OPCToPrivateLimitedCompany />}
              />
              <Route
                path="PrivateLimitedCompanyToLLP"
                element={<PrivateLimitedCompanyToLLP />}
              />
              <Route
                path="PrivateCompanyToPublicCompany"
                element={<PrivateCompanyToPublicCompany />}
              />
              <Route
                path="AddorRemoveaDirector"
                element={<AddorRemoveaDirector />}
              />
              <Route
                path="AddorRemoveaPartner"
                element={<AddorRemoveaPartner />}
              />
              <Route
                path="ChangeBusinessActivity"
                element={<ChangeBusinessActivity />}
              />
              <Route
                path="ChangeRegisteredOffice"
                element={<ChangeRegisteredOffice />}
              />
              <Route path="ChangeCompanyName" element={<ChangeCompanyName />} />
              <Route
                path="ChangeLLPAgreement"
                element={<ChangeLLPAgreement />}
              />
              <Route
                path="ChangePartnershipDeed"
                element={<ChangePartnershipDeed />}
              />
              <Route
                path="IncreaseAuthorisedShareCapital"
                element={<IncreaseAuthorisedShareCapital />}
              />
              <Route
                path="DissolveaPartnershipFarm"
                element={<DissolveaPartnershipFarm />}
              />
              <Route
                path="CloseaLimitedLiabilityPartnership"
                element={<CloseaLimitedLiabilityPartnership />}
              />
              <Route
                path="CloseOnePersonCompany"
                element={<CloseOnePersonCompany />}
              />
              <Route
                path="CloseaPrivateLimitedCompany"
                element={<CloseaPrivateLimitedCompany />}
              />
              <Route path="GstRegistration" element={<GstRegistration />} />
              <Route
                path="ImportExportCodeRegistration"
                element={<ImportExportCodeRegistration />}
              />
              <Route path="LUTUnderGst" element={<LUTUnderGst />} />
              <Route
                path="StartupIndiaRegistration"
                element={<StartupIndiaRegistration />}
              />
              <Route
                path="SSIMSMERegistration"
                element={<SSIMSMERegistration />}
              />
              <Route
                path="ShopEstablishmentRegistration"
                element={<ShopEstablishmentRegistration />}
              />
              <Route
                path="ProfessionalTaxRegistration"
                element={<ProfessionalTaxRegistration />}
              />
              <Route path="TANApplication" element={<TANApplication />} />
              <Route path="FSSAIApplication" element={<FSSAIApplication />} />
              <Route path="ESIRegistration" element={<ESIRegistration />} />
              <Route path="PFRegistration" element={<PFRegistration />} />
              <Route path="GEMRegistration" element={<GEMRegistration />} />
              <Route path="NSICRegistration" element={<NSICRegistration />} />
              <Route path="PANApplication" element={<PANApplication />} />
              <Route path="NSICRegistration" element={<NSICRegistration />} />
              <Route path="FactoryLicense" element={<FactoryLicense />} />
              <Route path="TradeLicense" element={<TradeLicense />} />
              <Route path="DrugLicense" element={<DrugLicense />} />
              <Route path="Liquor" element={<Liquor />} />
              <Route path="PatentSearch" element={<PatentSearch />} />
              <Route path="ProvisionalPatent" element={<ProvisionalPatent />} />
              <Route path="PermanentPatent" element={<PermanentPatent />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="LabourLicense" element={<LabourLicense />} />
              <Route path="AyushLicense" element={<AyushLicense />} />
              <Route path="ARAICertification" element={<ARAICertification />} />
              <Route path="ICATCertification" element={<ICATCertification />} />
              <Route path="DIR3DINKYCFilling" element={<DIR3DINKYCFilling />} />
              <Route
                path="ROCReturnFillingforLLP"
                element={<ROCReturnFillingforLLP />}
              />
              <Route
                path="ROCReturnFillingforOPC"
                element={<ROCReturnFillingforOPC />}
              />
              <Route
                path="ROCReturnFillingforPvtLtd"
                element={<ROCReturnFillingforPvtLtd />}
              />
              <Route
                path="PersonalorIndividualIncomeTaxFiling"
                element={<PersonalorIndividualIncomeTaxFiling />}
              />
              <Route
                path="BusinessIncometaxFiling"
                element={<BusinessIncometaxFiling />}
              />
              <Route
                path="CompanyIncometaxFiling"
                element={<CompanyIncometaxFiling />}
              />
              <Route path="TDSFiling" element={<TDSFiling />} />
              <Route path="GSTReturnFiling" element={<GSTReturnFiling />} />

              <Route path="Licenses" element={<Licenses />} />
              <Route path="UnderCompliances" element={<UnderCompliances />} />
              <Route path="TaxReturnFilings" element={<TaxReturnFilings />} />
              <Route path="DocumentWallet" element={<DocumentWallet />} />
              <Route path="Profile" element={<Profile />} />
            </Route>

            <Route
              path=""
              element={access_token3 ? <Sidebar /> : <Navigate to="/" />}
            >
              <Route path="Admin" element={<Admin />} />
              <Route path="Service" element={<Service />} />
              <Route path="OldApplication" element={<OldApplication />} />
              <Route path="OldApplicationData" element={<OldApplicationData/>} />
              <Route path="Reminder" element={<Reminder />} />
              <Route path="Feedbacks" element={<Feedbacks />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="CancelApplication" element={<CancelApplication />} />
              <Route path="Service/Payment" element={<Payment />} />
              <Route path="OldApplication/Payment" element={<Payment />} />
            </Route>

            <Route
              path=""
              element={access_token2 ? <Sidebar1 /> : <Navigate to="/" />}
            >
              <Route path="Account" element={<Account />} />
              <Route path="Invoice" element={<InvoicePage data={data} onChange={onInvoiceUpdated}/>} />
            </Route>

            <Route
              path=""
              element={access_token1 ? <Sidebar2 /> : <Navigate to="/" />}
            >
              <Route path="Dashboard1" element={<Dashboard1 />} />
              <Route path="Userdata" element={<Userdata />} />
            </Route>
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
