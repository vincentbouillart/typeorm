import {PrimaryGeneratedColumn, Column, Entity, OneToOne} from "../../../src/index";
import {Post} from "./Post";

@Entity("sample2_post_information")
export class PostInformation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
    
    @OneToOne(type => Post, post => post.information, {
        cascadeUpdate: true,
    })
    post: Post;

}