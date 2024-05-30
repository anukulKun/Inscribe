const mongoose = require("mongoose");

const form1Schema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  club: { type: Boolean },
  community: { type: Boolean },
  society: { type: Boolean },
  groups: { type: Boolean },
  a: { type: Boolean },
  b: { type: Boolean },
  c: { type: Boolean },
  d: { type: Boolean },
  specific: { type: Boolean },
  challenge: { type: Boolean },
  outreach: { type: Boolean },
  incubation: { type: Boolean },
  eid: { type: String, required: true },
  id: { type: String, required: true },
  domain: { type: Number, required: true },
  number: { type: String, required: true },
  designation: { type: String, required: true },
  institute: { type: String, required: true },
  achievements: { type: String, required: true },
  name2: { type: String, required: true },
  designation2: { type: String, required: true },
  signature: { type: String, required: true },
  details: { type: String, required: true },
  advisor: { type: Boolean },
  coadvisor: { type: Boolean },
  specialization: { type: String, required: true },
  entity: { type: String, required: true },
  event: { type: String, required: true },
  nomination: { type: String, required: true },
  by: { type: String, required: true },
  form: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const form2Schema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  club: { type: Boolean },
  community: { type: Boolean },
  society: { type: Boolean },
  groups: { type: Boolean },
  a: { type: Boolean },
  b: { type: Boolean },
  c: { type: Boolean },
  d: { type: Boolean },
  specific: { type: Boolean },
  challenge: { type: Boolean },
  outreach: { type: Boolean },
  incubation: { type: Boolean },

  details: { type: String, required: true },

  secretary: { type: Boolean },
  jointsecretary: { type: Boolean },

  eid: { type: String, required: true },
  id: { type: String, required: true },
  year: { type: Number, required: true },
  number: { type: String, required: true },
  curricular: { type: Number, required: true },
  program: { type: String, required: true },
  specialization: { type: String, required: true },
  achievements: { type: String, required: true },

  club2: { type: String, required: true },
  event: { type: String, required: true },

  name2: { type: String, required: true },
  designation: { type: String, required: true },
  signature: { type: String, required: true },

  nomination: { type: String, required: true },
  by: { type: String, required: true },

  form: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const form3Schema = new mongoose.Schema({
  details: { type: String, required: true },

  chiefadvisor: { type: Boolean },
  advisoryboard: { type: Boolean },

  eid: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  designation: { type: String, required: true },

  curricular: { type: Number, required: true },
  department: { type: String, required: true },

  specialization: { type: String, required: true },
  achievements: { type: String, required: true },

  club: { type: String, required: true },
  event: { type: String, required: true },

  novelty: { type: String, required: true },

  name: { type: String, required: true },
  dept: { type: String, required: true },
  signature: { type: String, required: true },

  nomination: { type: String, required: true },
  by: { type: String, required: true },

  form: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const form4Schema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  club: { type: Boolean },
  community: { type: Boolean },
  society: { type: Boolean },
  groups: { type: Boolean },
  a: { type: Boolean },
  b: { type: Boolean },
  c: { type: Boolean },
  d: { type: Boolean },
  specific: { type: Boolean },
  challenge: { type: Boolean },
  outreach: { type: Boolean },
  incubation: { type: Boolean },

  details: { type: String, required: true },

  secretary: { type: Boolean },
  jointsecretary: { type: Boolean },

  eid: { type: String, required: true },
  id: { type: String, required: true },
  year: { type: Number, required: true },
  number: { type: String, required: true },
  curricular: { type: Number, required: true },
  program: { type: String, required: true },
  specialization: { type: String, required: true },
  achievements: { type: String, required: true },

  club2: { type: String, required: true },
  event: { type: String, required: true },

  name2: { type: String, required: true },
  designation: { type: String, required: true },
  signature: { type: String, required: true },

  nomination: { type: String, required: true },
  by: { type: String, required: true },

  form: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const formModel1 = mongoose.model("form1", form1Schema);
const formModel2 = mongoose.model("form2", form2Schema);
const formModel3 = mongoose.model("form3", form3Schema);
const formModel4 = mongoose.model("form4", form4Schema);

module.exports = {
  formModel1,
  formModel2,
  formModel3,
  formModel4,
};
