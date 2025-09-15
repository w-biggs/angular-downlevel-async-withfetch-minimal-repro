import {Component, inject, input, OnInit, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  standalone: true,
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  private readonly http = inject(HttpClient);

  url = input.required<string>();

  text = signal<any>('');

  ngOnInit() {
    this.http.get(this.url()).subscribe((res) => {
      console.log(res);
    });
  }

}
