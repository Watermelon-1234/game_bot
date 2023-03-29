import { SlashCommandBuilder } from 'discord.js'

export const command =new SlashCommandBuilder().setName('機器人測試').setDescription('讓他可以說話');

export const action = async (interaction)=>{
    await interaction.reply('喵!');
}
