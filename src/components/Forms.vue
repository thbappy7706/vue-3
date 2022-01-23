<!--Conditional Rendering-->
<template>
  <div>
    <pre>{{JSON.stringify(formValues,null,2)}}</pre>
  </div>

  <form @submit="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name">
    </div>

    <div>
      <label for="profile">Profile Summery</label>
      <textarea id="profile" v-model="formValues.profileSummery"/>
    </div>

    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="china">China</option>
        <option value="england">England</option>
        <option value="bangladesh">Bangladesh</option>
      </select>
    </div>


    <div>
      <label for="locations">Country</label>
      <select id="locations" multiple v-model="formValues.jobLocations">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="china">China</option>
        <option value="england">England</option>
        <option value="bangladesh">Bangladesh</option>
      </select>
    </div>

    <div>
      <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
      <label for="remoteWork">Open for remotely work?</label>
    </div>

    <div>
      <label>Set Skills</label>
      <input type="checkbox" id="html" value="html" v-model="formValues.skillSet"  />
      <label for="html">HTML</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skillSet"  />
      <label for="css">CSS</label>
      <input type="checkbox" id="php" value="php" v-model="formValues.skillSet"  />
      <label for="php">PHP</label>
    </div>

    <div>
      <button>Submit</button>
    </div>

  </form>

</template>

<script>
export default {
  name: `Forms`,
  data()
  {
    return{
      formValues :
          {
            name:'',
            profileSummery:'',
            country:'',
            jobLocations: [],
            remoteWork:"no",
            skillSet:[]
          },
    }
  },
  methods:
      {
        submitForm(event)
        {
          event.preventDefault();
          console.log(`Form Values`, this.formValues)
        }
      }



}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;

}
input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>