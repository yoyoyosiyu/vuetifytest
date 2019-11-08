<template>
  <v-container>
    
    <v-form>
      <v-text-field label="用户名" prepend-icon="mdi-account-circle"/>
      <v-text-field 
        label="密码" 
        prepend-icon="mdi-lock" 
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
        :type="showPassword? 'text': 'password'"
        @click:append="showPassword = !showPassword"></v-text-field>

      <v-card-actions>
        <v-btn color="success">注册</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">登录</v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    showPassword: true
  }),
};
</script>
