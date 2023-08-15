import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { MesasModule } from './mesas/mesas.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [ProdutosModule, MesasModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
