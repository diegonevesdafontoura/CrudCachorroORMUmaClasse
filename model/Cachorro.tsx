import { Entity, PrimaryGeneratedColumn, Column } 
from "typeorm"
@Entity()
export class Cachorro {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    datanascimento: string

    @Column()
    sexo: string

    @Column()
    raca: string
    
    constructor(obj?: Partial<Cachorro>) {
       if (obj) {
           this.id = obj.id
           this.nome = obj.nome
           this.datanascimento = obj.datanascimento
           this.raca = obj.raca
           this.sexo = obj.sexo               
       }
   }
}
