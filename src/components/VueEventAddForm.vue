<template>
    <div class="container-all">
        <div class="container-form">
           <div class="row-a">
               <a-input class="lgf" placeholder="Nome do Evento"></a-input>
               <a-select class="select" defaultValue="Gastronomico"></a-select>
               <a-select class="select" defaultValue="Direito"></a-select>
           </div>
           <div class="row-b">
               <a-textarea class="text-area" placeholder="Descrição"></a-textarea>
               <a-upload-dragger class="drag" name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                    <p class="ant-upload-drag-icon">
                        <a-icon type="inbox" />
                    </p>
                </a-upload-dragger>
           </div>
           <div class="row-c">
               <a-date-picker format="DD-MM-YYYY" class="date" placeholder="29/01/2019">
                    <template slot="dateRender" slot-scope="current, today">
                        <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
                            {{current.date()}}
                        </div>
                    </template>
                </a-date-picker>
                <a-time-picker class="time" format="HH:mm" placeholder="00:00" />
                <a-date-picker format="DD-MM-YYYY" class="date" placeholder="29/01/2019">
                    <template slot="dateRender" slot-scope="current, today">
                        <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
                            {{current.date()}}
                        </div>
                    </template>
                </a-date-picker>
                <a-time-picker class="time" format="HH:mm" placeholder="00:00" />
           </div>
           <div class="row-d">
               <a-select class="mdf" defaultValue="Presencial"></a-select>
               <a-input class="mdf" placeholder="Presencial"></a-input>
               <a-input class="mdf" placeholder="exemplo.com.br"></a-input>
           </div>
           <div class="row-e">
               <a-input placeholder="Av. Rua, Logradouro, 928"></a-input>
           </div>
           <div class="row-f">
               <a-input class="smf" placeholder="57036390"></a-input>
               <a-input class="smf" placeholder="Jatiúca"></a-input>
               <a-input class="smf" placeholder="Maceió"></a-input>
               <a-input class="smf" placeholder="Alagoas"></a-input>
           </div>
           <div class="line"></div>
           <div class="row-g">
               <vue-button type="sm">Cancelar</vue-button>
               <vue-button shape="secondary" type="sm">Salvar</vue-button>
           </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import VueButton from './VueButton'

export default {
    name: 'VueEventAddForm',
    components: {
        VueButton,
    },
    methods: {
    getCurrentStyle (current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
     moment,
  },
};
</script>

<style lang="stylus" scoped>
.container-all
    display flex
    justify-content center
.container-form
    background #ffffff
    margin-top 3rem
    display flex
    flex-direction column
    max-width 98.2rem
    width 100%
    border-radius 1.1rem
    margin-bottom 8rem
.lgf
    max-width 43.8rem
    width 100%
.mdf
    max-width 29.3rem
    width 100%
    margin-left 2rem
.smf
    max-width 20.8rem
    width 100%
.select
    max-width 20rem
    width 100%
    margin-left 3rem
.row-a
    display flex
    margin-left 4rem
    margin-top 8rem
.row-b
    display flex
    margin-top 3rem
    margin-left 4rem
.text-area
    max-width 43.8rem
    width 100%
    margin-right 3rem
    min-height 12.1rem
.row-c
    display flex
    margin-top 3rem
    margin-left 2rem
.drag
    max-width 43.4rem
    width 100%
    min-height 12.1rem
.date
    margin-left 2rem
    max-width 13.1rem
    width 100%
.time
    margin-left 2rem
    max-width 13.1rem
    width 100%
.row-d
    display flex
    margin-left 2rem
    margin-top 3rem
.row-e
    display flex
    margin-left 4rem
    margin-right 2.2rem
    margin-top 3rem
.row-f
    display flex
    margin-top 3rem
    margin-left 4rem
    margin-right 2.2rem
    justify-content space-between
.line
    width auto
    border-color #D4D9E1
    margin-top 3rem
.row-g
    display flex
    margin-top 3rem
    justify-content center
    margin-bottom 3rem
.btn
    border-radius 0.3rem
.primary
    border 1px solid #8B93A6
    color #000000
</style>