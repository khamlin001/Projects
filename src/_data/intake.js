module.exports = {
  types: [
    { key: "Opportunity", short: "OPP" },
    { key: "Promo", short: "PRM" },
    { key: "Project", short: "PRJ" },
    { key: "Supplier PO", short: "PO" }
  ],
  vendorTypes: ["Promo", "Supplier PO"],
  vendors: [
    { id: "V-10014", name: "Acme Promotional Products", category: "Promotional", contact: "orders@acmepromo.example", terms: "Net 30", status: "Active" },
    { id: "V-10208", name: "Brightline Print Services", category: "Print", contact: "accounting@brightline.example", terms: "Net 15", status: "Active" },
    { id: "V-10442", name: "Compass Office Supply", category: "Office Supply", contact: "support@compass.example", terms: "Net 30", status: "Active" },
    { id: "V-10719", name: "Northstar Technical Staffing", category: "Professional Services", contact: "deltek@northstar.example", terms: "Net 45", status: "Active" },
    { id: "V-11063", name: "Summit Hardware and Safety", category: "Materials", contact: "sales@summiths.example", terms: "Net 30", status: "Active" },
    { id: "V-11501", name: "Keystone Logistics", category: "Freight", contact: "dispatch@keystone.example", terms: "Net 20", status: "Active" },
    { id: "V-11877", name: "Harbor Event Rentals", category: "Events", contact: "team@harborrentals.example", terms: "Due on receipt", status: "Active" },
    { id: "V-12005", name: "Pinnacle Software Group", category: "Software", contact: "billing@pinnaclesg.example", terms: "Annual", status: "Active" }
  ],
  commonFields: [
    { name: "requestTitle", label: "Request title", type: "text", required: true, full: true },
    { name: "requestedBy", label: "Requested by", type: "text", required: true },
    { name: "department", label: "Department", type: "text", required: true },
    { name: "needBy", label: "Need by", type: "date", required: true },
    { name: "priority", label: "Priority", type: "select", required: true, options: ["Normal", "High", "Low"] },
    { name: "notes", label: "Notes", type: "textarea", required: false, full: true }
  ],
  specificFields: {
    "Opportunity": [
      { name: "opportunityName", label: "Opportunity name", type: "text", required: true },
      { name: "customer", label: "Customer", type: "text", required: true },
      { name: "estimatedValue", label: "Estimated value", type: "number", required: true, min: "0", step: "0.01" },
      { name: "expectedCloseDate", label: "Expected close date", type: "date", required: true },
      { name: "captureManager", label: "Capture manager", type: "text", required: true },
      { name: "deltekOpportunityId", label: "Deltek opportunity ID", type: "text", required: false }
    ],
    "Promo": [
      { name: "campaignName", label: "Campaign or event", type: "text", required: true },
      { name: "itemDescription", label: "Item description", type: "text", required: true },
      { name: "quantity", label: "Quantity", type: "number", required: true, min: "1", step: "1" },
      { name: "inHandsDate", label: "In-hands date", type: "date", required: true },
      { name: "budget", label: "Budget", type: "number", required: true, min: "0", step: "0.01" },
      { name: "shipTo", label: "Ship to", type: "text", required: true, full: true }
    ],
    "Project": [
      { name: "projectName", label: "Project name", type: "text", required: true },
      { name: "projectManager", label: "Project manager", type: "text", required: true },
      { name: "clientName", label: "Client", type: "text", required: true },
      { name: "startDate", label: "Start date", type: "date", required: true },
      { name: "projectCode", label: "Project or charge code", type: "text", required: true },
      { name: "contractType", label: "Contract type", type: "select", required: true, options: ["Firm Fixed Price", "Time and Materials", "Cost Plus", "Internal"] }
    ],
    "Supplier PO": [
      { name: "poDescription", label: "PO description", type: "text", required: true, full: true },
      { name: "amount", label: "Amount", type: "number", required: true, min: "0", step: "0.01" },
      { name: "buyer", label: "Buyer", type: "text", required: true },
      { name: "deliveryDate", label: "Delivery date", type: "date", required: true },
      { name: "deliverTo", label: "Deliver to", type: "text", required: true },
      { name: "glOrProjectCode", label: "GL or project code", type: "text", required: true }
    ]
  }
};
